class UserMailer < ActionMailer::Base

  def contact(nomYap,email,asunto,mensaje)
    @email = email
    @nomYap = nomYap
    @asunto = asunto
  	@mensaje = mensaje
    mail(to: "unlp93nahuelter@gmail.com", subject: "#{@asunto}", from: "#{@email}")
  end
end