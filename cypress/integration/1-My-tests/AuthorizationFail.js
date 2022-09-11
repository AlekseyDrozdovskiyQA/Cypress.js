describe('Проверка авторизации с валидным имеилом и невалидным паролем на сайте staya', function () {
    
    it('Перехожу на главную страницу, нажимаю вход и ввожу данные', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('mytestlogin@yandex.ru');
        cy.get('.auth-form > form > [type="password"]').type('Password');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
                        })
})
