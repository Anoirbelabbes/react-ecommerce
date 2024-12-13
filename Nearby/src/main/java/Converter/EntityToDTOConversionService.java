package Converter;

import Entity.*;
import Model.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EntityToDTOConversionService {

    public UserDTO convertToUserDTO(User user) {
        UserDTO dto = new UserDTO();
        dto.setId(user.getId());
        dto.setName(user.getName());
        dto.setEmail(user.getEmail());
        dto.setPhoneNumber(user.getPhoneNumber());
        dto.setRole(user.getRole().name());
        return dto;
    }

    public SellerDTO convertToSellerDTO(Seller seller) {
        SellerDTO dto = new SellerDTO();
        dto.setId(seller.getId());
        dto.setShopName(seller.getShopName());
        dto.setShopDescription(seller.getShopDescription());
        dto.setRating(seller.getRating());
        dto.setUser(convertToUserDTO(seller.getUser()));
        return dto;
    }

    public ClientDTO convertToClientDTO(Client client) {
        ClientDTO dto = new ClientDTO();
        dto.setId(client.getId());
        dto.setAddress(client.getAddress());
        dto.setUser(convertToUserDTO(client.getUser()));
        return dto;
    }

    public ProductDTO convertToProductDTO(Product product) {
        ProductDTO dto = new ProductDTO();
        dto.setId(product.getId());
        dto.setName(product.getName());
        dto.setDescription(product.getDescription());
        dto.setPrice(product.getPrice());
        dto.setStockQuantity(product.getStockQuantity());
        dto.setCategoryName(product.getCategory() != null ? product.getCategory().getName() : null);
        dto.setSellerId(product.getSeller().getId());
        dto.setSellerName(product.getSeller().getShopName());
        return dto;
    }

    public OrderDTO convertToOrderDTO(Order order) {
        OrderDTO dto = new OrderDTO();
        dto.setId(order.getId());
        dto.setClientId(order.getClient().getId());
        dto.setClientName(order.getClient().getUser().getName());
        dto.setTotalPrice(order.getTotalPrice());
        dto.setStatus(order.getStatus().name());
        dto.setCreatedAt(order.getCreatedAt());
        List<OrderItemDTO> items = order.getItems().stream()
                .map(this::convertToOrderItemDTO)
                .toList();
        dto.setItems(items);
        return dto;
    }

    public OrderItemDTO convertToOrderItemDTO(OrderItem orderItem) {
        OrderItemDTO dto = new OrderItemDTO();
        dto.setProductId(orderItem.getProduct().getId());
        dto.setProductName(orderItem.getProduct().getName());
        dto.setQuantity(orderItem.getQuantity());
        dto.setPrice(orderItem.getPrice());
        dto.setSubtotal(orderItem.getSubtotal());
        return dto;
    }
}
