package Entity;

public enum OrderStatus {
    PENDING,     // Order has been placed but not yet processed
    CONFIRMED,   // Order has been confirmed by the seller
    SHIPPED,     // Order has been shipped to the client
    DELIVERED,   // Order has been delivered successfully
    CANCELED,    // Order has been canceled
    RETURNED     // Order has been returned
}
