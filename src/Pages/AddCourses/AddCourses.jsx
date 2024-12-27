import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
import { MdAddCircle } from "react-icons/md";
import Swal from "sweetalert2";
import moment from "moment";
import useAuth from "../../hooks/useAuth";

// const img_hosting_api =
//   `https://api.imgbb.com/1/upload?key=${}`;

const AddCourses = () => {
  //   const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = async (data) => {
    // console.log(data)
    // const imgFile = { image: data.image[0] };
    // const res = await axiosPublic.post(img_hosting_api, imgFile, {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // });
    // if (res.data.success) {
    const newCourse = {
      title: data.title,
      description: data.description,
      instructor_name: data.instructor_name,
      badge_text: data.badge_text,
      badge_color: data.badge_color,
      // image: res.data.data.display_url,
      created_at: moment().format("ddd, MMM D, YYYY h:mm A"),
      author: {
        name: user?.name,
        email: user?.email,
      },
    };

    console.log(newCourse);

    const courseRes = await axiosSecure.post("/course", newCourse);
    console.log(courseRes.data);

    if (courseRes.data.data.id) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Successfully added ${data.title}`,
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    }
    // }
  };

  return (
    <div className="bg-[#f3f3f3] min-h-screen">
      <div className="px-3 max-w-6xl mx-auto py-12">
        <div className="text-center md:w-1/2 lg:w-5/12 mx-auto">
          <p className="text-xl md:text-2xl neue orange mb-4">
            --- Create * Add * Launch ---
          </p>
          <h2 className="text-[#151515] font-bold cinzel border-y-2 py-5 text-2xl md:text-4xl">
            Add New Course
          </h2>
        </div>
        <div className="bg-white px-4 md:px-12 py-12 mt-12 rounded">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row gap-0 md:gap-6">
              <label className="form-control dark2 w-full">
                <div className="label">
                  <span className="font-semibold">
                    Course Title <span className="text-red-600">*</span>
                  </span>
                </div>
                <input
                  {...register("title", { required: true })}
                  name="title"
                  type="text"
                  placeholder="Type Course Title"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control dark2 w-full">
                <div className="label">
                  <span className="font-semibold">
                    Instructor Name <span className="text-red-600">*</span>
                  </span>
                </div>
                <input
                  {...register("instructor_name", { required: true })}
                  name="instructor_name"
                  type="text"
                  placeholder="Enter Instructor Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="flex flex-col md:flex-row gap-0 md:gap-6">
              <label className="form-control w-full">
                <div className="label">
                  <span className="font-semibold">
                    Badge Color <span className="text-red-600">*</span>
                  </span>
                </div>
                <select
                  defaultValue="default"
                  {...register("badge_color", { required: true })}
                  name="badge_color"
                  className="select select-bordered"
                >
                  <option disabled value="default">
                    Select One
                  </option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                  <option value="yellow">Yellow</option>
                  <option value="purple">Purple</option>
                </select>
              </label>

              <label className="form-control dark2 w-full">
                <div className="label">
                  <span className="font-semibold">
                    Badge Text <span className="text-red-600">*</span>
                  </span>
                </div>
                <input
                  {...register("badge_text", { required: true })}
                  name="badge_text"
                  type="text"
                  placeholder="Type Badge Text"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <label className="form-control">
              <div className="label">
                <span className="font-semibold">
                  Course Details <span className="text-red-600">*</span>
                </span>
              </div>
              <textarea
                {...register("description", { required: true })}
                name="description"
                className="textarea textarea-bordered h-24"
                placeholder="Description..."
              ></textarea>
            </label>

            {/* <div className="my-5">
            <input
              {...register("image", { required: true })}
              name="image"
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div> */}
            <button className="flex mt-5 items-center gap-2 text-lg text-white font-bold px-5 py-3 hover:from-[#c82201] hover:to-[#FF3811] bg-gradient-to-r from-[#FF3811] to-[#c82201]">
              Add Course <MdAddCircle />{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourses;
