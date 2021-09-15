import styled from "styled-components";
import category from "../lib/category";
import { ICategoryNext } from "../types";

const Wrapper = styled.div`
  height: 100%;
  flex: 1;
  background-color: #f7f7f7;
  padding: 10px;
  section {
    height: 100%;
    display: flex;
    flex-direction: column;
    color: gray;
    div.section__list {
      h1 {
        margin-bottom: 20px;
      }
      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        li {
          height: 2rem;
          &:hover {
            color: #5f0080;
            cursor: pointer;
          }
        }
      }
    }
  }
  ul.foodCategory {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: gray;
    li:hover {
      color: #5f0080;
      cursor: pointer;
    }
  }
`;

const CategoryInfo: React.FC<ICategoryNext> = ({ keyword }) => {
  return (
    <Wrapper>
      {keyword === "gift" || keyword === "holiday" ? (
        <section>
          <div className="section__list">
            <h1>===카테고리별===</h1>
            <ul>
              {category[keyword].category.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="section__list">
            <h1>===가격대별===</h1>
            <ul>
              {category[keyword].prices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : (
        <ul className="foodCategory">
          {category[keyword].map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </Wrapper>
  );
};

export default CategoryInfo;
