import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: "page-books",
  templateUrl: "books.html"
})
export class BooksPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    private modalCtrl: ModalController
  ) {}

  openBookModal(book: string) {
    var data: any;

    switch (book) {
      case "ThinkAndGrowRich":
        data = {
          bookName: "Think and Grow Rich",
          author: "Napoleon Hill",
          imgUrl: "assets/imgs/books/think-and-grow-rich.jpg",
          summary1: "Think and Grow Rich has been called the \"Granddaddy of All Motivational Literature.\" It was the first book to boldly ask, \"What makes a winner?\" The man who asked and listened for the answer, Napoleon Hill, is now counted in the top ranks of the world's winners himself. The most famous of all teachers of success spent \"a fortune and the better part of a lifetime of effort\" to produce the \"Law of Success\" philosophy that forms the basis of his books and that is so powerfully summarized in this one.",
          summary2: "In the original Think and Grow Rich, published in 1937, Hill draws on stories of Andrew Carnegie, Thomas Edison, Henry Ford, and other millionaires of his generation to illustrate his principles. In the updated version, Arthur R. Pell, Ph.D., a nationally known author, lecturer, and consultant in human resources management and an expert in applying Hill's thought, deftly interweaves anecdotes of how contemporary millionaires and billionaires, such as Bill Gates, Mary Kay Ash, Dave Thomas, and Sir John Templeton, achieved their wealth. Outmoded or arcane terminology and examples are faithfully refreshed to preclude any stumbling blocks to a new generation of readers.",
          summary3: ""
        };
        break;

      case "GoPro":
        data = {
          bookName: "Go Pro",
          author: "Eric Worre",
          imgUrl: "assets/imgs/books/go-pro.jpg",
          summary1: "Over twenty years ago at a company convention, Eric Worre had an aha moment that changed his life forever. At that event he made the decision to Go Pro and become a Network Marketing expert. Since that time, he has focused on developing the skills to do just that. In doing so, Eric has touched and been touched by hundreds of thousands of people around the world. Now he shares his wisdom in a guide that will ignite your passion for this profession and help you make the decision to Go Pro and create the life of your dreams. In this definitive guidebook, you will learn to:-Find prospects -Invite them to your product or opportunity -Present your product -Follow up with your prospects -Help them become customers or distributors -Help them get started right -Grow your team by promoting events -And much, much more. Eric's wish is for you to make the decision to become a Network Marketing Professional. For you to truly Go Pro. Because it is a stone-cold fact that Network Marketing is a better way. Now let's go tell the world.",
          summary2: "",
          summary3: ""
        };
        break;

      case "StartWithWhy":
        data = {
          bookName: "Start with Why",
          author: "Simon Sinek",
          imgUrl: "assets/imgs/books/start-with-why.jpg",
          summary1: "Start with Why is a book written by Simon Sinek. Someone may ask, what is so special about this book? In this book, Sinek discusses success, but not in the usual, \"follow these steps to achieve anything you want,\" way. Sinek uses a different approach than readers tend to find in other literature of the same type.",
          summary2: "The very first premise that the author uses to lead us into his book is a premise that contains one simple word: why. Why do some people reach success while others do not? Why do some groups manage to team-up and endure challenges, thus succeeding, while others fail to do so? What is it that makes some people different from others when it comes to achieving success? The entire book revolves around that question word. But the interesting thing about it, which eventually lead to an even more interesting conclusion, is that there is an answer to this \"why.\" Sinek uses many examples from real life and from people he knew or had researched, and shows how they managed to succeed. By using these examples, the author shows his readers that if others can succeed, so can we. When it comes to practical answers to \"why,\" the author invests significant effort in finding all the answers. ",
          summary3: "Start with Why is an intriguing and fascinating read, which will surely make readers ask themselves this simple, yet tricky question: why?"
        };
        break;
    }

    const myModal = this.modalCtrl.create("BookModalPage", data);
    myModal.present();
  }
}
