export default function DashboardCard({
  item,
}: {
  item: { title: string; icon: React.ReactElement };
}) {
  return (
    <div className="group bg-white p-6 rounded-md space-y-4 border-2 border-white hover:border-[#A93636] hover:bg-[#F9E9E9] transition-all duration-200 ease-in cursor-pointer">
      <div className="h-[48px] w-[48px] rounded-full bg-[#F4F4F4] flex justify-center items-center ">
        {item.icon}
      </div>
      <div>
        <h3 className="text-[18px] font-semibold text-black">{item.title}</h3>
        <p className="text-[16px] text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>
    </div>
  );
}
