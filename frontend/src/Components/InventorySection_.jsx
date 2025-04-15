  // import Card from "./Card";

  // function InventorySection() {
  //   return (
  //     <>
  //       <div className="my-5 ">
  //         <div>
  //           <div className="mx-6">
  //             <p className="text-xl pl-10 font-semibold">Motorcycles Available</p>
  //           </div>
  //         </div>
  //         <div className="my-6 flex flex-wrap gap-y-10 justify-evenly min-h-screen p-2">
  //           <div className="">
  //             <Card />
  //             {/* item 1*/}
  //           </div>
  //           <div className="">
  //             <Card />
  //             {/* item 1*/}
  //           </div>
  //           <div className="">
  //             <Card />
  //             {/* item 1*/}
  //           </div>
  //           <div className="">
  //             <Card />
  //             {/* item 1*/}
  //           </div>
  //           <div className="">
  //             <Card />
  //             {/* item 1*/}
  //           </div>
  //           <div className="">
  //             <Card />
  //             {/* item 1*/}
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  // export default InventorySection;
  import { useEffect, useState } from 'react';
  import axios from 'axios';
  import Card1 from "./Card1";

  function InventorySection() {
    const [motorcycles, setMotorcycles] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/api/inventory')
        .then(response => {
          console.log('Fetched motorcycles:', response.data);
          setMotorcycles(response.data);
        })
        .catch(error => {
          console.error('Error fetching motorcycles:', error);
        });
    }, []);

    return (
      <>
        <div className="my-5">
          <div className="mx-6">
            <p className="text-xl pl-10 font-semibold">Motorcycles Available</p>
          </div>
          <div className="my-6 flex flex-wrap gap-y-10 gap-x-10 mx-10 justify-evenly p-2">
            {motorcycles.map(motorcycle => (
              <Card1 key={motorcycle._id} motorcycle={motorcycle} />
            ))}
          </div>
        </div>
      </>
    );
  }

  export default InventorySection;
