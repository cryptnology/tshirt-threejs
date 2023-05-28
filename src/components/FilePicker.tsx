import { CustomButton } from '.';

interface Props {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  readFile: (type: 'logo' | 'full') => Promise<void>;
}

const FilePicker = ({ file, setFile, readFile }: Props) => {
  return (
    <div className="filepicker-container">
      <div className="flex flex-1 flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files && e.target.files[0])}
        />
        <label className="filepicker-label" htmlFor="file-upload">
          Upload File
        </label>
        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === null ? 'No file selected' : file.name}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          customStyles="text-xs"
          type="outline"
          title="Logo"
          handleClick={() => readFile('logo')}
        />
        <CustomButton
          customStyles="text-xs"
          type="filled"
          title="Full"
          handleClick={() => readFile('full')}
        />
      </div>
    </div>
  );
};

export default FilePicker;
