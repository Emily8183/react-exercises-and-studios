export default function BookList() {
   let pageTitle = "My booklist";
   let book1 = "http://subs.booklistonline.com/custompages/Booklist/booklist_authenticator.aspx?publication=booklinks&edition_date=2021-11-02";
   let book2 = "http://subs.booklistonline.com/custompages/Booklist/booklist_authenticator.aspx?publication=booklinks&edition_date=2022-03-15";
   let book3 = "http://subs.booklistonline.com/custompages/Booklist/booklist_authenticator.aspx?publication=booklinks&edition_date=2021-01-26";

   return (
      <>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Book Links Nov 2021" />
         <img src={book2} alt="Book Links March 2022" />
         <img src={book3} alt="Book Links Feb 2021" />
      </>      
   );
}