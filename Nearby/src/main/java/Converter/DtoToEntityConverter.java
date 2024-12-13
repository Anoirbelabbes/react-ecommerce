package Converter;

import Entity.*;
import Model.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

public class DtoToEntityConverter {


    public Product convertProductDTOToEntity(ProductDTO dto, Category category, Seller seller) {
        Product product = new Product();
        product.setId(dto.getId());
        product.setName(dto.getName());
        product.setPrice(dto.getPrice());
        product.setDescription(dto.getDescription());
        product.setCategory(category);
        product.setSeller(seller);
        return product;
    }


    public Order convertOrderDTOToEntity(OrderDTO dto, Client client) {
        Order order = new Order();
        order.setId(dto.getId());
        order.setCreatedAt(dto.getCreatedAt());
        order.setClient(client);


        List<OrderItem> items = dto.getItems().stream()
                .map(itemDTO -> {
                    OrderItem item = new OrderItem();
                    item.setQuantity(itemDTO.getQuantity());
                    item.setOrder(order);
                    return item;
                })
                .collect(Collectors.toList());

        order.setItems(items);
        return order;
    }


    public Client convertClientDTOToEntity(ClientDTO dto,User user) {
        Client client = new Client();
        client.setId(dto.getId());
        client.setUser(user);;
        client.setAddress(dto.getAddress());
        return client;
    }


    public Seller convertSellerDTOToEntity(SellerDTO dto,User user) {
        Seller seller = new Seller();
        seller.setId(dto.getId());
        seller.setUser(user);
        seller.setShopName(dto.getShopName());
        return seller;
    }


    public OrderItem convertOrderItemDTOToEntity(OrderItemDTO dto, Order order,Product product) {
        OrderItem item = new OrderItem();
        item.setProduct(product);
        item.setQuantity(dto.getQuantity());
        item.setOrder(order);
        item.setSubtotal(dto.getSubtotal());
        item.setPrice(dto.getPrice());
        return item;
    }


    public Category convertCategoryDTOToEntity(CategoryDTO dto) {
        Category category = new Category();
        category.setId(dto.getId());
        category.setName(dto.getName());
        category.setDescription(dto.getDescription());
        return category;
    }
}
