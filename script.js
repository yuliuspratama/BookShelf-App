const book = [];
let caritampil=[];
const Tampil = 'Tampil';

const Carisaja = 'cari';
const SessionBookID = [] ;

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
        Simpan();
        Tombol.append(Tombolselesai);
        Gabungtext.append(Tombol);
    } else {
        const TombolBelum = document.createElement('button')
        TombolBelum.classList.add('green');
        TombolBelum.innerText = "selesai di Baca";
        TombolBelum.addEventListener('click',function(){
            BelumBaca(id);
            
        })
        Simpan();
        Tombol.append(TombolBelum);
        Gabungtext.append(Tombol);
    }
    const TombolBuang = document.createElement('button')
    TombolBuang.classList.add('red');
    TombolBuang.innerText = "Hapus buku";
    TombolBuang.addEventListener('click',function(){
        Hapus(id);

    })
    Simpan();
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
  
  function TampilCari(Gendata1) {
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
    localStorage.setItem(SessionBookID, "");
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
    // localStorage.setItem(SessionBookID,JSON.stringify(ItemData));
    book.push(ItemData);
    document.dispatchEvent(new Event(Tampil));
  }

function Submit() {
    const submit = document.getElementById('bookSubmit');
    submit.addEventListener('click',function(evet){
        evet.preventDefault();
        inputdata();
        });
}
function CariNama(name) {
    for (const Databook of book) {
        if (Databook.title === name){
            return Databook;
        }
    }
    return null;
  }

function CariBuku(){

    const cariJudul = document.getElementById('searchBookTitle').value; 
    const targetBook = CariNama(cariJudul);
    console.log(targetBook);
    if (targetBook == null) return ;
    // alert(targetBook.value)
    caritampil = [];
    caritampil.push(targetBook);
    document.dispatchEvent (new Event(Carisaja));
}

function SubmitCari(){
    const tombolcari = document.getElementById('searchSubmit');
    tombolcari.addEventListener('click',function(evet){
    evet.preventDefault();

    CariBuku();
    //fungsi
    })
    
}

document.addEventListener('DOMContentLoaded',function(){
    Submit();
    SubmitCari();

  });

  document.addEventListener(Carisaja,function(){

    const incompleteBookshelfList = document.getElementById('incompleteBookshelfList');
    const completeBookshelfList = document.getElementById('completeBookshelfList');

    incompleteBookshelfList.innerHTML = null;
    completeBookshelfList.innerHTML = null;
    for (const Databook of caritampil){
        // console.log(Databook);
        console.log(book);
        const Elementbook = TampilCari(Databook);
        if (Databook.isCompleted) {
            completeBookshelfList.append(Elementbook);
        } else {
            incompleteBookshelfList.append(Elementbook);
        }
       
    }
})

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

//storage
window.addEventListener('load',function(){
    if (typeof(Storage) !== "undefined"){
        if (localStorage.getItem(SessionBookID)!==null){
            Ambildatalocal()
        }          
        } else {
            alert('Browser yang Anda gunakan tidak mendukung Web Storage');
          }
})

function Simpan() {
    const datasimpan = JSON.stringify(book);
    localStorage.setItem(SessionBookID, datasimpan);
    // document.dispatchEvent(new Event(SaveItem));
}


function Ambildatalocal(){
    const Serialdata = localStorage.getItem(SessionBookID);
    let data = JSON.parse(Serialdata);

    if (data !== null) {
        for (const Databook of data){
            book.push(Databook);
        }
    }

    document.dispatchEvent(new Event(Tampil));
}
