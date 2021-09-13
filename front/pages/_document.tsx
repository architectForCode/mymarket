import { DocumentContext, Enhancer } from "next/dist/shared/lib/utils";
import { ServerStyleSheet } from "styled-components";
import Document from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    //스타일 구성요소의 ServerStyleSheet 클래스를 인스턴스화
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      //renderPage: 이 메서드에 연결하여 초기 페이지 로드시 서버측 자식 구성 요소의 스타일을 분석함.
      //renderPage를 커스텀하는 이유는 서버 측 렌더링에서 제대로 작동하기 위해 애플리케이션을 래핑해야 하는 css-in-js 라이브러리와 함께 사용하기 위한것.
      ctx.renderPage = () =>
        originalRenderPage({
          //eslint-disable-next-line react/display-name
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initalProps = await Document.getInitialProps(ctx);
      return {
        ...initalProps,
        styles: (
          <>
            {initalProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
