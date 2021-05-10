import AddDistributor from './AddDistributor'
import AddProduct from './AddProduct'
import EditDistributor from './editDistributor'

function Admin() {

  return (
    <div className="section">
<h3> עריכת מנהל</h3>
<EditDistributor />
<AddDistributor />
<AddProduct />
    </div>
  );
}

export default Admin;
