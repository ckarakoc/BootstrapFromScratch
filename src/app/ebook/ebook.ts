import { Component, inject, signal, TemplateRef, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faDollarSign, faRocket, faSquare, faUser } from '@fortawesome/free-solid-svg-icons';
import { ModalDismissReasons, NgbCollapse, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-ebook',
  imports: [
    RouterLink,
    FaIconComponent,
    NgbCollapse,
  ],
  templateUrl: './ebook.html',
  styleUrl: './ebook.scss'
})
export class Ebook {
  imageUrlHeader: string = "assets/images/ebook/header-background.jpg"
  imageUrlDownload: string = "assets/images/ebook/download-background.jpg";

  private modalService = inject(NgbModal);

  scrolled = signal<boolean>(false);
  closeResult: WritableSignal<string> = signal('');
  isCollapsed = signal<boolean>(true);

  onWindowScroll(event: Event): void {
    this.scrolled.set(window.scrollY > 50);
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, ariaLabelledBy: 'modal-basic-title', size: 'xl' }).result.then(
      (result) => {
        this.closeResult.set(`Closed with: ${ result }`);
      },
      (reason) => {
        this.closeResult.set(`Dismissed ${ this.getDismissReason(reason) }`);
      },
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${ reason }`;
    }
  }

  protected readonly faUser = faUser;
  protected readonly faRocket = faRocket;
  protected readonly faDollarSign = faDollarSign;
  protected readonly faSquare = faSquare;
  protected readonly faFacebook = faFacebook;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faInstagram = faInstagram;
  protected readonly faTwitter = faTwitter;
  protected readonly faPinterest = faPinterest;
}
