Drop table users;
CREATE TABLE users(
	email VARCHAR(255) PRIMARY KEY,
	created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users(email) VALUES
('hihi@gmail.com'),('htutu@naver.com');