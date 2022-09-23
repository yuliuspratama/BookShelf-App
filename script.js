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

    const Judultext = document.createElement('h3');
    Judultext.innerText = title;

    const Penulistext = document.createElement('p');
    Penulistext.innerText = author;

    const Tahuntext = document.createElement('p');
    Tahuntext.innerText = year;


    const Gabungtext = document.createElement('article');
    Gabungtext.classList.add('book_item');
    Gabungtext.append(Judultext,Penulistext,Tahuntext)
    Gabungtext.setAttribute('id', `${id}`)

    const Tombol = document.createElement('div');
    Tombol.classList.add('action');
    // Tombol.append(Gabungtext);
    // Tombol.setAttribute('id', `${id}`)

    if (isCompleted) {
        const Tombolselesai = document.createElement('button')
        Tombolselesai.classList.add('green')
        Tombolselesai.innerText = "Belum selesai di Baca";
        Tombolselesai.addEventListener('click',function(){
            SelesaiBaca(id);
                
        })
        Tombol.append(Tombolselesai);
        Gabungtext.append(Tombol);
    } else {
        const TombolBelum = document.createElement('button')
        TombolBelum.classList.add('green');
        TombolBelum.innerText = "selesai di Baca";
        TombolBelum.addEventListener('click',function(){
            BelumBaca(id);
                
        })

        Tombol.append(TombolBelum);
        Gabungtext.append(Tombol);
    }
    const TombolBuang = document.createElement('button')
    TombolBuang.classList.add('red');
    TombolBuang.innerText = "Hapus buku";
    TombolBuang.addEventListener('click',function(){
        Hapus(id);
    })
    Tombol.append(TombolBuang)
    Gabungtext.append(Tombol)
    return Gabungtext;
  }

  function CariData(ID) {
    for (const Databook of book) {
        if (Databook.id === ID){
            return Databook;
        }
    }
    return null;
  }
  

  function SelesaiBaca(id) {
    const targetBook = CariData(id);
    if (targetBook == null) return ;

    targetBook.isCompleted = false;
    document.dispatchEvent(new Event(Tampil));
  }

  function BelumBaca(id) {
    const targetBook = CariData(id);
    if (targetBook == null) return ;

    targetBook.isCompleted = true;
    document.dispatchEvent(new Event(Tampil));
  }

  function Hapus(id) {
    const targetBook = CariData(id);
    if (targetBook == null) return ;

    book.splice(targetBook,1)
    document.dispatchEvent(new Event(Tampil));
  }

  function inputdata() {
    const textJudul = document.getElementById('inputBookTitle').value; 
    const textPenulis = document.getElementById('inputBookAuthor').value;
    const textTahun = document.getElementById('inputBookYear').value;
    const Selesaicentang = document.getElementById('inputBookIsComplete').checked;
    const GenID1 = GenID();
    // alert(Selesaicentang);
    const ItemData = GenData(GenID1,textJudul,textPenulis,textTahun,Selesaicentang);
    book.push(ItemData);
    document.dispatchEvent(new Event(Tampil));
  }




document.addEventListener('DOMContentLoaded',function(){
    const submit = document.getElementById('bookSubmit');
    submit.addEventListener('click',function(evet){
    evet.preventDefault();
    inputdata();
    });
  });

document.addEventListener(Tampil,function(){

    const incompleteBookshelfList = document.getElementById('incompleteBookshelfList');
    const completeBookshelfList = document.getElementById('completeBookshelfList');

    incompleteBookshelfList.innerHTML = null;
    completeBookshelfList.innerHTML = null;
    for (const Databook of book){

        const Elementbook = Containerdata(Databook);
        if (Databook.isCompleted) {
            completeBookshelfList.append(Elementbook);
        } else {
            incompleteBookshelfList.append(Elementbook);
        }
       
    }
})
