// user.test.js
const User = require('../src/user');

describe('User', () => {
  let user;

  beforeEach(() => {
    user = new User('John', 'Doe', 30, 'john@example.com', '1234567890', 0, 'password');
  });

  describe('constructor', () => {
    test('should create a new user with correct properties', () => {
      expect(user.firstName).toBe('John');
      expect(user.lastName).toBe('Doe');
      expect(user.age).toBe(30);
      expect(user.email).toBe('john@example.com');
      expect(user.phone).toBe('1234567890');
      expect(user.loginAttempts).toBe(0);
      expect(user.password).toBe('password');
    });
  });

  describe('login', () => {
    test('should increment loginAttempts and log a message', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      user.login();
      expect(user.loginAttempts).toBe(1);
      expect(consoleSpy).toHaveBeenCalledWith('John Doe has logged in.');
      consoleSpy.mockRestore();
    });
  });

  describe('logout', () => {
    test('should reset loginAttempts to 0 and log a message', () => {
      user.loginAttempts = 3;
      const consoleSpy = jest.spyOn(console, 'log');
      user.logout();
      expect(user.loginAttempts).toBe(0);
      expect(consoleSpy).toHaveBeenCalledWith('John Doe has logged out.');
      consoleSpy.mockRestore();
    });
  });

  describe('resetLoginAttempts', () => {
    test('should reset loginAttempts to 0 and log a message', () => {
      user.loginAttempts = 5;
      const consoleSpy = jest.spyOn(console, 'log');
      user.resetLoginAttempts();
      expect(user.loginAttempts).toBe(0);
      expect(consoleSpy).toHaveBeenCalledWith('John Doe has reset login attempts.');
      consoleSpy.mockRestore();
    });
  });
});
