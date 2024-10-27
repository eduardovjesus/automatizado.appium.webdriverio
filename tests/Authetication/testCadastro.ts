import AuthPage from "../../pageObjects/pageAuthentication.ts/objectsAuthentication";
import cadastroPage from "../../pageObjects/pageAuthentication.ts/objectsCadastro";
import homePage from "../../pageObjects/pagesHome/objectsHome";
import WelcomePage from "../../pageObjects/pagesWelcome/objectsWelcome";
import { emailtest, pass } from '../../global/credenciais';

describe('Funcionalidade de Cadastro no App', function() {
    // before: Executa uma vez antes do primeiro teste do bloco.
    // after: Executa uma vez após o último teste do bloco.
    // beforeEach: Executa antes de cada teste do bloco.
    // afterEach: Executa após cada teste do bloco.

    before(async function() {
        await WelcomePage.findWelcomeScreen();
        await WelcomePage.navigateToSignInScreen();
        await AuthPage.findAuthScreen();
    });

    describe('CN01 - Validar cadastro com email não existente no BD', function() {
        it('CT01 - Deve redirecionar para a tela de cadastro com email não existente no BD', async function () {
            await AuthPage.preencherEmail(emailtest);
            await AuthPage.clicarContinuar();
            await cadastroPage.findSignUpScreenScreen();
        });

        it('CT02 - Deve preencher de cadastro e enviar os dados', async function () {
            await cadastroPage.preencherName("Eduardo");
            await cadastroPage.preencherFirstName("Jesus");
            await cadastroPage.preencherPassword(pass);
            await cadastroPage.clicarNext();
            await homePage.findHomeScreen();
        });
    });
});

