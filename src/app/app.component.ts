import { Component } from '@angular/core';
import { ApiUrls } from './apiUrl';
import { selectedDocApis   } from './apiUrlsInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';

  public apiUrlForSelectedDoc : selectedDocApis = {
    selectedDocView: ApiUrls.getDocumentWithKendoRequest
   }

   public viewType : string='1';

   public selectedDocId : string = '173';

  public styleConfig = { }
}
