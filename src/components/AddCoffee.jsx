
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const price = form.price.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = { name, chef, price, taste, category, details, photo };
    console.log(newCoffee);
    fetch('http://localhost:5000/coffee', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        form.reset();
        Swal.fire({
            title: 'success!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    })
  };
  return (
    <div>
      <div className="w-10/12 mx-auto bg-base-200  px-32 py-10">
        <div className="text-center my-5">
          <h1 className="font-bold text-3xl mb-5">Add New Coffee</h1>
          <p className="">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at <br /> its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed <br /> to using Content here.
          </p>
        </div>

        <form onSubmit={handleAddCoffee}>
          <div className="flex justify-between gap-6 items-center my-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Enter a coffee name"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Chef</span>
              </div>
              <input
                type="text"
                name="chef"
                placeholder=" Enter a coffee chef"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="flex justify-between gap-6 items-center my-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                type="text"
                name="price"
                placeholder="Enter coffee Price"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Taste</span>
              </div>
              <input
                type="text"
                name="taste"
                placeholder=" Enter coffee Taste"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="flex justify-between gap-6 items-center my-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee Category"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Details</span>
              </div>
              <input
                type="text"
                name="details"
                placeholder=" Enter coffee details"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="flex justify-between gap-6 items-center my-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Photo</span>
              </div>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo url"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <input type="submit" value="Add Coffee" className="w-full py-3 text-center font-bold bg-[#D2B48C]  border-2 border-[#331A15] text-[#331A15] rounded-lg"/>
        </form>

        {/* <button className="w-full py-3 text-center font-bold bg-[#D2B48C]  border-2 border-[#331A15] text-[#331A15] rounded-lg">
          Add Coffee
        </button> */}
      </div>
    </div>
  );
};

export default AddCoffee;
