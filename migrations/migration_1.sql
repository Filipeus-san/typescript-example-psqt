CREATE TABLE invoices (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    invoice_number VARCHAR(50) NOT NULL UNIQUE,
    user_id BIGINT UNSIGNED NOT NULL,
    customer_name VARCHAR(255) NOT NULL,
    issue_date DATE NOT NULL,
    due_date DATE NOT NULL,
    total_amount DECIMAL(12,2) NOT NULL,
    currency CHAR(3) NOT NULL DEFAULT 'CZK',
    status VARCHAR(20) NOT NULL DEFAULT 'unpaid',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_invoices_user FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);

CREATE TABLE invoice_items (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    invoice_id BIGINT UNSIGNED NOT NULL,
    description TEXT NOT NULL,
    quantity DECIMAL(10,2) NOT NULL,
    unit_price DECIMAL(12,2) NOT NULL,
    vat_rate DECIMAL(5,2) NOT NULL,
    CONSTRAINT fk_invoice_items_invoice FOREIGN KEY (invoice_id)
        REFERENCES invoices(id)
        ON DELETE CASCADE
);