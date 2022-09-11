describe('Проверка авторизации с валидным имеилом на сайте staya', function () {
    
    it('Перехожу на главную страницу, нажимаю вход и ввожу данные', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('mytestlogin@yandex.ru');
        cy.get('.auth-form > form > [type="password"]').type('Mytestpassword');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');
                        })
})
