export default function UserProfile({params}: any) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black text-white">
            <h1>Welcome to your Profile Page</h1>

            <hr />
            
            <p className="text-4xl">Profile Page 
                <span className=" p-2 ml-2 rounded bg-orange-500 text-black">{params.id}</span>
            </p>
        </div>
    );
}
