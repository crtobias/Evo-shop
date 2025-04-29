export default function MainLayout({ children }) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center p-4">

        <div className="flex flex-row bg-blue-800 w-full gap-15 rounded-lg items-center justify-center">
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
        </div>


        <div className=" flex min-h-screen bg-blue-800 w-full rounded-lg p-4 justify-center">{children}</div>


        <div className="flex flex-row bg-blue-800 w-full gap-15 rounded-lg items-center justify-center">Footer</div>
      </div>
    );
  }
  