import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Courses = () => {
  const axiosSecure = useAxiosSecure();

  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axiosSecure.get("/course");
      return res?.data?.data?.data;
    },
  });
  return (
    <div className="bg-[#f3f3f3] min-h-screen">
      <div className="max-w-7xl mx-auto px-3">
        <div className="text-center md:w-1/2 lg:w-5/12 mx-auto pt-12">
          <p className="text-xl md:text-2xl neue orange mb-4">
            --- Learn * Build * Grow ---
          </p>
          <h2 className="text-[#151515] font-bold cinzel border-y-2 py-5 text-2xl md:text-4xl">
            Course Craft
          </h2>
        </div>
        {courses.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12">
            {courses.map((course) => (
              <div key={course.id} className="myCard">
                <figure>
                  <img
                    className="cardImage"
                    src={course.image}
                    alt="Course Image"
                  />
                </figure>
                <div className="badgeContainer">
                  <p
                    className={`px-3 absolute -mt-6 text-white py-1 text-sm rounded font-semibold ${course.badge_color}`}
                  >
                    {course.badge_text}
                  </p>
                </div>
                <div className="myCardBody">
                  <h2 className="myCardTitle">{course.title}</h2>
                  <p className="description">
                    {course.description.slice(0, 45)}...
                  </p>
                  <div className="cardActions">
                    <button
                      onClick={() =>
                        document.getElementById(course.id).showModal()
                      }
                      className="detailsButton"
                    >
                      View Details
                    </button>
                  </div>
                </div>

                {/* Modal */}
                <dialog id={`${course.id}`} className="modal">
                  <div className="modal-box">
                    <span className="flex justify-end">
                      <button
                        className="text-2xl text-red-500 font-medium"
                        onClick={() =>
                          document.getElementById(course.id).close()
                        }
                      >
                        X
                      </button>
                    </span>
                    <h3 className="font-bold neue text-2xl dark2">
                      {course.title}
                    </h3>
                    <p className="py-4 dark3 font-medium">
                      {course.description}
                    </p>
                    <p className="text-sky-500 font-mono">
                      Instructor: {course.instructor_name}
                    </p>
                  </div>
                </dialog>
              </div>
            ))}
          </div>
        ) : (
          <h3 className="text-center py-16 dark2 text-3xl font-bold">
            No Item to Show.....
          </h3>
        )}
      </div>
    </div>
  );
};

export default Courses;
