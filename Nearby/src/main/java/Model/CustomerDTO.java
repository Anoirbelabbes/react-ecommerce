package Model;

public class CustomerDTO {
    private Long id;
    private boolean account;

    // Constructor
    public CustomerDTO(Long id, boolean account) {
        this.id = id;
        this.account = account;
    }

    public void setAccount(boolean account) {
        this.account = account;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isAccount() {
        return account;
    }
}