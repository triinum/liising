@testLogin
Feature: Test a la pagina de login
	AS a  usuario
	Quiero entrar a linkedin
	Para ver mi perfil

	@PruebaNegativa
	Scenario: Login con email y password incorrectos
		Given Yo estoy en Linkedin
		When uso el email "usuario@incorrecto.cl"
		And la contrasena "p4sswordNO"
		When Yo ingreso en linkedin
		Then obtengo el mensaje "Vaya, no reconocemos esa dirección de correo electrónico. Vuelve a intentarlo."


	@CaminoFeliz @PruebaPositiva
	Scenario: Login con email y password correctos
		Given Yo estoy en Linkedin
		#When uso el email "usuario@correcto.cl"
		#And la contrasena "p4sswordOK"
		When uso el email "jwcastillo@gmail.com"
		And la contrasena "15227124*"
		When Yo ingreso en linkedin
		And veo mi perfil
		And voy a mis contactos
		And Selecciono el contacto nro "1" de la lista
		Then veo su perfil

