let form =document.getElementById('book-form')
let title =document.getElementById('title');
let author =document.getElementById('author');
let icbn =document.getElementById('icbn');
let book_list = document.getElementById('book-list')

form.addEventListener('submit',function(e){
    e.preventDefault()
   if(title.value=='' && author.value==''&& icbn.value ==''){
      alert('Please Fill All Box then Submit ')
   }else{
       let newTr = document.createElement('tr');

       let newTitle= document.createElement('th');
       newTitle.innerHTML=title.value;
       newTr.appendChild(newTitle);

       let newAuthor = document.createElement('th');
       newAuthor.appendChild(document.createTextNode(author.value));
       newTr.appendChild(newAuthor);
       console.log(newTr);

       let newIcbn = document.createElement('th');
       newIcbn.innerHTML=icbn.value;
       newTr.appendChild(newIcbn)

       book_list.appendChild(newTr)
   }
    

})