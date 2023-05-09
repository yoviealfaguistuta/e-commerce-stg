import React, { Fragment,useState, useEffect} from "react";
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import { RxDividerVertical } from 'react-icons/rx';
import { FiTrash2 } from 'react-icons/fi';
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Form from 'react-bootstrap/Form';


const Barang = ({ischeckout,isinfo}) => {
    const [openForm, setopenForm] = useState('none');
    const [count, setCount] = useState(0);
    const [Catatan, setCatatan] = useState(0); 
///tuliscatatan
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

}

function openForms() {
  console.log('openForm :>> ', openForm);
  if (openForm == 'none') {
    setopenForm('')
  } else {
    setopenForm('none')
  }
}

//plusminus
function plus() {
  setCount(count + 1);

}

function min() {
  if (count > 0) {
    setCount(count - 1);
  }
}

return (
    <Card>

      {
        (!ischeckout)?
        <><Form.Check style={{ fontSize: 14, fontWeight: 'bold' }} label="TokoIni" />
        <a style={{ color: '#7B8FA1', fontSize: 13, paddingLeft: 30 }}>Bandar Lampung</a>
       
     
  </> : ''
      }
<div className="row">
  <div className="col-2">
    <div style={{ display: 'flex', alignContent: 'center', textAlign: 'center' }}>
      <div className="col-2">  
      <Form.Check /></div>

      <Figure>
        <Figure.Image style={{ height: 100, width: 120 }}
          src="https://tse4.mm.bing.net/th?id=OIP.2paaXoyhspUguo3iIMZ2kAHaHa&pid=Api&P=0">
        </Figure.Image>
      </Figure>
    </div>
  </div>

  <div className="col-8">
    <p style={{ fontSize: 14 }}>nama</p>
    <p style={{ fontSize: 14, fontWeight: 'bold' }}>harga</p>

  </div>
  <div className="row">
    <div className="col-6">
      <a onClick={() => openForms()} style={{ color: '#5D9C59', display: (openForm === 'none') ? '' : 'none', fontSize: 14, paddingLeft: 30 }}>{Catatan == "" ? 'Tulis Catatan' : Catatan}</a>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control style={{ width: 250, display: openForm, fontSize: 13 }} type="Note" onBlur={() => setopenForm('none')} onChange={(e) => setCatatan(e.target.value)} placeholder="Pastikan tidak ada data pribadi" />
        </Form.Group>
      </Form>
    </div>
    <div className="col-6">
      
       <a style={{ color: '#7B8FA1', fontSize: 13 }}>Sudah ada di wishlist</a>
      <a style={{ fontSize: 25, color: '#7B8FA1', fontWeight: 'bold' }}> <RxDividerVertical /></a>
      <a style={{ fontSize: 20, color: '#7B8FA1' }}> <FiTrash2 /></a>
      <a onClick={() => min()} style={{ fontSize: 20, color: '#7B8FA1' }}> <AiOutlineMinusCircle /></a>
      {count}
      <a onClick={() => plus()} style={{ fontSize: 20, color: '#7B8FA1' }}> <AiFillPlusCircle /></a>
    </div>
  </div>
</div>
</Card>
)
};

export default Barang;



