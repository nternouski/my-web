class UserMailer < ActionMailer::Base
	default from: "veritaserumpotions@gmail.com"
  def contact(nomYap,email,asunto,mensaje)
    @email = email
    @nomYap = nomYap
    @asunto = asunto
  	@mensaje = mensaje
    mail(to: "unlp93nahuelter@gmail.com", subject: "#{@asunto}")
  end
end