describe('Проверка авторизации с валидным имеилом и невалидным паролем на сайте staya', function () {
    
    it('Перехожу на главную страницу, нажимаю вход и ввожу данные', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('Ввести валидный имеил');
        cy.get('.auth-form > form > [type="password"]').type('Ввести невалидный пароль');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
                        })
})
