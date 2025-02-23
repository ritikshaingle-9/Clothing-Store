export default function Button({buttontext}) {
  return (
    <div>
        <button className="mr-25 bg-[#6f1d1b] text-center text-white border-amber-400 p-2 rounded w-30">
        {buttontext}
        </button>
    </div>
  );
}

