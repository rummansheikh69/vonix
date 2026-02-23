import { Check, X } from "lucide-react";
import { RiTelegram2Fill } from "react-icons/ri";
import ImageGallery from "../ui/ImageGallery";

function ProjecrDetailsModal({ onclose }) {
  const benifits = [
    {
      title: "Professional Design",
      desc: "High-quality work from industry experts",
    },
    {
      title: "Quick Turnaround",
      desc: "Fast delivery without compromising quality",
    },
    {
      title: "Unlimited Revisions",
      desc: "We work until you're completely satisfied",
    },
    {
      title: "Full Rights",
      desc: "You own the full rights to the work we create",
    },
  ];

  const images = [
    "https://marketplace.canva.com/EAFauoQSZtY/2/0/1600w/canva-brown-mascot-lion-free-logo-kAK-ljYAGXg.jpg",
    "https://i.makeagif.com/media/5-18-2015/ZgtMpI.gif",
    "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/76499/optimized_product_thumb_stage.jpg",
    "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/76499/optimized_product_thumb_stage.jpg",
  ];
  return (
    <div className=" w-full">
      <div className=" w-full ">
        <div className=" w-full h-24 bg-[#131313] border-b border-primary-border px-6 flex items-center justify-between">
          <div>
            <h2 className=" text-xl font-semibold tracking-tight">
              Logo Design
            </h2>
            <h2 className=" text-sm font-semibold tracking-wide uppercase text-text-gray">
              by vonex
            </h2>
          </div>

          <button
            onClick={onclose}
            className=" cursor-pointer size-12 rounded-full border-primary-border bg-[#1a1a1a] hover:bg-[#1f1f1f] duration-200 flex items-center justify-center"
          >
            <X className=" text-zinc-300" />
          </button>
        </div>
        <div className=" p-6 max-h-[66vh] overflow-y-auto no-scrollbar">
          <div className=" w-full h-full grid md:grid-cols-2 gap-6">
            {/* image gallery */}
            <div className=" w-full h-full">
              <ImageGallery images={images} />
            </div>

            {/* details  */}
            <div className=" relative w-full h-full">
              <div className="  w-full sticky top-0 ">
                <div className=" p-5 border border-primary-border bg-[#080808] rounded-xl">
                  <h1 className=" font-semibold tracking-tight text-xl text-zinc-200">
                    Project Details
                  </h1>
                  <p className=" text-left font-medium text-sm text-text-gray mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor eos voluptate, cumque deleniti quisquam, magnam dicta,
                    voluptate dolores
                  </p>
                  <h1 className=" font-semibold tracking-tight text-xl text-zinc-200 my-3">
                    Benifits
                  </h1>
                  <div className=" grid grid-cols-2 gap-4">
                    {benifits.map((item, index) => (
                      <div
                        key={index}
                        className=" p-3 bg-[#131313] rounded-lg flex items-start gap-2"
                      >
                        <div className=" flex items-center">
                          <Check
                            className=" text-blue-400 mt-[2px]"
                            size={15}
                          />
                        </div>
                        <div>
                          <h2 className=" text-[15px] font-semibold text-zinc-200">
                            {item.title}
                          </h2>
                          <p className=" text-text-gray text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="  border border-primary-border bg-[#080808] rounded-xl mt-6 ">
                  <div className=" w-full h-full flex flex-col items-center gap-2 bg-[radial-gradient(circle_at_top,#181818,transparent)] p-5">
                    <h1 className=" font-semibold tracking-tight text-lg text-zinc-200">
                      Love This?
                    </h1>
                    <h4 className=" text-sm text-text-gray font-medium max-w-sm text-center capitalize">
                      want something similar or even better for your
                      brand/service?
                    </h4>
                    <button className="bg-white text-black px-6  py-2 rounded-xl flex items-center justify-center gap-2 font-medium cursor-pointer hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] duration-300 hover:transform  hover:-translate-y-0.5">
                      <RiTelegram2Fill size={16} /> Get a Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjecrDetailsModal;
