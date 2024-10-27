import AuthPage from "../../pageObjects/pageAuthentication.ts/objectsAuthentication";
import homePage from "../../pageObjects/pagesHome/objectsHome";
import loginPage from "../../pageObjects/pageAuthentication.ts/objectsLogin";
import WelcomePage from "../../pageObjects/pagesWelcome/objectsWelcome";
import { emailtest, pass } from '../../global/credenciais';

describe('Funcionalidade login no app', function() {
    before(async function() {
        await WelcomePage.findWelcomeScreen();
        await WelcomePage.navigateToSignInScreen();
        await AuthPage.findAuthScreen();
    });

    describe('CN01 - Validar login com email cadastrado', function() {
        it('CT01 - Preencher campos de email', async function () {
            await AuthPage.preencherEmail(emailtest);
            await AuthPage.clicarContinuar();
        });
        
        it('CT02 - Verificar tela de login', async function () {
            await loginPage.findSignInScreen();
        });

        it('CT03 - Verificar autenticação com password', async function () {
            await loginPage.preencherPassword(pass);
            await loginPage.clicarNext();            
            await homePage.findHomeScreen();
        });
    }); 
});
