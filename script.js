const book = [];
const Tampil = 'Tampil';

function GenID() {
    return +new Date();
  }
  function GenData(id,title,author,year,isCompleted) {
    return{
      id,
      title,
      author,
      year,
      isCompleted
    }
  }

  function Containerdata(Gendata1) {
    const {id,title,author,year,isCompleted} = Gendata1

    const Judultext = document.createElement('h2');
    Judultext.innerText = title;

    const Penulistext = document.createElement('h3');
    Penulistext.innerText = author;

    const Tahuntext = document.createElement('p');
    Tahuntext.innerText = year;

    const Gabungtext = document.createElement('div');
    Gabungtext.classList.add('inner');
    Gabungtext.append(Judultext,Penulistext,Tahuntext)

    const penampung = document.createElement('div');
    penampung.classList.add('Book-items','black');
    penampung.append(Gabungtext);
    penampung.setAttribute('id', `${id}`)

    return penampung;
  }

  function inputdata() {
    const textJudul = document.getElementById('inputBookTitle').value; 
    // alert(textJudul);
    const textPenulis = document.getElementById('inputBookAuthor').value;
    // alert(textPenulis);
    const textTahun = document.getElementById('inputBookYear').value;
    // alert(textTahun);
    const GenID1 = GenID();
    // alert(GenID1);
    
    const ItemData = GenData(GenID,textJudul,textPenulis,textTahun);
    book.push(ItemData);
    // alert(ItemData);
    document.dispatchEvent(new Event(Tampil));
  }



// document.addEventListener('DOMContentLoaded',function(){
//     const submit = document.getElementById('bookSubmit');
  
//     submit.addEventListener('click',function(evet){
//       evet.preventDefault();
//     const textTitle = document.createElement('h2');
//     textTitle.innerText = GenID();
//     document.body.appendChild(textTitle);
  
//     });
//   });

document.addEventListener('DOMContentLoaded',function(){
    const submit = document.getElementById('bookSubmit');
    submit.addEventListener('click',function(evet){
    evet.preventDefault();
    // alert("masuk1");
    inputdata();
    });
  });

document.addEventListener(Tampil,function(){

    const incompleteBookshelfList = document.getElementById('incompleteBookshelfList');
    const completeBookshelfList = document.getElementById('completeBookshelfList');
    // alert("masuk");
    for (const Databook of book){
        const Elementbook = Containerdata(Databook);
        incompleteBookshelfList.append(Elementbook);
    }
})
