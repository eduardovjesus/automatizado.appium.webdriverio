// welcome.page.ts
import { $ } from '@wdio/globals';

class HomeScreen {

    get videoScreen() { // tela de vídeo
        return $('android=new UiSelector().resourceId("VideoScreen")');
    }
    
    get Play() { // reproduzir vídeo
        return $('android=new UiSelector().resourceId("Touchable")');
    }
    
    get videoPlayback() { // verificar que o vídeo está sendo reproduzido
        return $('android=new UiSelector().resourceId("REACT_NATIVE_VIDEO")');
    }
    
    get btnLike() { // botão de like
        return $('android=new UiSelector().resourceId("LikeEngagementButton")');
    }
    
    get btnSave() { // botão de salvar vídeo
        return $('android=new UiSelector().resourceId("QueueEngagementButton")');
    }
    
    get btnDownload() { // botão de download
        return $('android=new UiSelector().resourceId("DownloadEngagementButton")');
    }
    
    get btnLikedEngagement() { // botão de download
        return $('//android.widget.Button[@content-desc="Liked"]');
    }

    get btnSaveEngagement() { // botão de download
        return $('//android.widget.Button[@content-desc="Saved"]');
    }

    get btnDownloadEngagement() { // botão de download
        return $('//android.widget.Button[@content-desc="Downloading"]');
    }
    
    /* ----------------------------------------------------------------*/

    public async findVideoScreen() {
        await expect(this.videoScreen).toBeDisplayed();
    }
    
    public async clicarPlay() { // clicar no botão de reproduzir
        await expect(this.Play).toBeDisplayed();
        await this.Play.click();
    }
    
    public async verificarVideoPlayback() { // verificar se o vídeo está sendo reproduzido
        await expect(this.videoPlayback).toBeDisplayed();
    }
    
    public async clicarBtnLike() { // clicar no botão de like
        await expect(this.btnLike).toBeDisplayed();
        await this.btnLike.click();
    }
    
    public async clicarBtnSave() { // clicar no botão de salvar
        await expect(this.btnSave).toBeDisplayed();
        await this.btnSave.click();
    }
    
    public async clicarBtnDownload() { // clicar no botão de download
        await expect(this.btnDownload).toBeDisplayed();
        await this.btnDownload.click();
    }

    public async verificarLikedEngagement() { // clicar no botão de download
        await expect(this.btnLikedEngagement).toBeDisplayed();
    }

    public async verificarDownloadEngagement() { // clicar no botão de download
        await this.btnDownloadEngagement.waitForDisplayed({ timeout: 1500000 }); // Aguardando até 30 segundos
    }

    public async verificarSavedEngagement() { // clicar no botão de download
        await expect(this.btnSaveEngagement).toBeDisplayed();
    }
    
}

export default new HomeScreen();
