class LoginFormData {
  final String email;
  final String password;
  final bool rememberMe;

  LoginFormData({
    required this.email,
    required this.password,
    this.rememberMe = false,
  });
}
