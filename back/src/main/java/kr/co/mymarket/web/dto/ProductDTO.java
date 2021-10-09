package kr.co.mymarket.web.dto;

public class ProductDTO {
    private int productId;
    private String name;
    private int price;
    private int discountRate;
    private int discountedPrice;
    private String unit;
    private int weight;
    private int deliveryId;
    private String origin;
    private int pacakgeId;
    private String info;
    private int stock;
    private String description;
    private String certification;

    public ProductDTO(int productId, String name, int price, int discountRate, int discountedPrice, String unit, int weight, int deliveryId, String origin, int pacakgeId, String info, int stock, String description, String certification) {
        this.productId = productId;
        this.name = name;
        this.price = price;
        this.discountRate = discountRate;
        this.discountedPrice = discountedPrice;
        this.unit = unit;
        this.weight = weight;
        this.deliveryId = deliveryId;
        this.origin = origin;
        this.pacakgeId = pacakgeId;
        this.info = info;
        this.stock = stock;
        this.description = description;
        this.certification = certification;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getDiscountRate() {
        return discountRate;
    }

    public void setDiscountRate(int discountRate) {
        this.discountRate = discountRate;
    }

    public int getDiscountedPrice() {
        return discountedPrice;
    }

    public void setDiscountedPrice(int discountedPrice) {
        this.discountedPrice = discountedPrice;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public int getDeliveryId() {
        return deliveryId;
    }

    public void setDeliveryId(int deliveryId) {
        this.deliveryId = deliveryId;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public int getPacakgeId() {
        return pacakgeId;
    }

    public void setPacakgeId(int pacakgeId) {
        this.pacakgeId = pacakgeId;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCertification() {
        return certification;
    }

    public void setCertification(String certification) {
        this.certification = certification;
    }
}
