const PreviewCard = ({ title, description, author }) => (
    <div className="bg-white text-black p-4 rounded-lg shadow-md mb-4 mx-2 flex flex-col w-1/2">
      <h3 className="text-lg font-bold mb-2 text-black">{title}</h3>
      <p className="text-gray-600 mb-2 text-black flex-grow">{description}</p>
      <p className="text-sm text-gray-500 text-black self-start">{author}</p>
    </div>
  );
  
  export default function Rightpage({ filePreviews }) {
    return (
      <div className="flex-col w-1/3 h-full bg-yellow-200 p-4">
        <div className="text-black flex flex-wrap">
          {filePreviews && filePreviews.map((file, index) => (
            <PreviewCard
              key={index}
              title={file.title}
              description={file.description}
              author={file.author}
            />
          ))}
        </div>
      </div>
    );
  }