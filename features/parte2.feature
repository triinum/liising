@testLogin
Feature: Testing procurement search
	AS a  procurer
	I'd like to log in and enter procurements
	using all sorts of fake generated data

	@Happy path
	Scenario: Search with correct data
		Given You are on procurement registers main page
		When You enter username "Jaak.Kulmar"
        Then You enter password "Parool123"
        When You click on procurement button
        Then modal appears
        When You enter procurer name
        Then You enter all relevant data
        When You wait for the desktop to appear



	@TriinuM @Non-happy path
	Scenario: Search with uncorrect data
		Given You are on procurement registers main page
		When You enter username "Jaak.Kulmar"
        Then You enter password "Parool123"
        When You click on procurement button
        Then modal appears
        When You enter procurer name
        Then You enter all relevant data
        When You wait for the desktop to appear
