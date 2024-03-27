"use client";
import Image from 'next/image';
import { FaPaperclip, FaPaperPlane, FaTimes, FaSpinner } from 'react-icons/fa';
import { useState } from 'react';

export default function Homepage({setFilePreviews}) {
 
    const [attachedFiles, setAttachedFiles] = useState([]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState('');
  
    const handleFileChange = (event) => {
      const files = Array.from(event.target.files);
      setAttachedFiles((prevFiles) => [...prevFiles, ...files]);
      setFilePreviews([
        {
          title: "The Adventures of Sherlock Holmes",
          description:
            "A collection of thrilling detective stories featuring the famous Sherlock Holmes and his sidekick, Dr. Watson.",
          author: "Arthur Conan Doyle",
        },
        {
          title: "To Kill a Mockingbird",
          description:
            "A powerful novel that explores racial injustice and moral growth through the eyes of a young girl in the American South.",
          author: "Harper Lee",
        },
      ])
    };
  
    const handleRemoveFile = (index) => {
      setAttachedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
      
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Input Text:', inputText);
      console.log('Attached Files:', attachedFiles);
      setInputText('');
      setAttachedFiles([]);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setResponse('This is a hardcoded response paragraph.');
      }, 2000);
    };
  
    return (
      <div className="flex-col h-full w-1/3 bg-white">
        <div className="flex-grow p-8">
          <div className="flex justify-center mb-8">
            <Image src="/poplogo.png" alt="Population Council Logo" width={400} height={400} />
          </div>
          <h1 className="text-4xl font-bold text-center mb-6" style={{ color: '#003A5D' }}>
            CAPE<br />Statement Creator
          </h1>
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Describe what you want to happen"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full p-8 pr-20 border border-gray-300 rounded-md focus:outline-none"
              />
              <div className="absolute top-0 right-0 flex items-center h-full">
                <label htmlFor="fileInput" className="p-2 bg-[#F1F0E8] border border-gray-300 rounded-md cursor-pointer hover:bg-[#E0DFD8]">
                  <FaPaperclip className="text-gray-600" />
                </label>
                <input
                  id="fileInput"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                />
                <button
                  className="ml-2 p-2 bg-[#BA5B38] rounded-md hover:bg-[#A44E32]"
                  onClick={handleSubmit}
                >
                  <FaPaperPlane className="text-white" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <p className="text-sm text-gray-500">
              Note: CAPE Statement Creator can make mistakes, please check its work.
            </p>
            <div>
              {attachedFiles.map((file, index) => (
                <div key={index} className="flex items-center mb-2 p-4 bg-gray-100 border border-gray-300 rounded-md shadow-md">
                  <span className="text-sm truncate w-48">{file.name}</span>
                  <button
                    className="ml-2 p-1 bg-red-500 rounded-full"
                    onClick={() => handleRemoveFile(index)}
                  >
                    <FaTimes className="text-white text-xs" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            {isLoading ? (
              <div className="flex justify-center items-center">
                <FaSpinner className="animate-spin text-2xl text-[#BA5B38]" />
              </div>
            ) : (
              response && <p className="text-lg">{response}</p>
            )}
          </div>
        </div>
        <footer className="bg-white py-4 text-center">
          <p className="text-xs text-gray-700">
            Population Council is not legally responsible for the generated content. Please use the tool responsibly.
          </p>
        </footer>
      </div>
    );
  }
 