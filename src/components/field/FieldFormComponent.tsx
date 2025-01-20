import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {Field} from "../../models/field.ts";
import {addField, deleteField, updateField} from "../../reducers/FieldSlice.ts";
import FieldTableComponent from "./FieldTableComponent.tsx";

const FieldFormComponent = () => {

    const fields = useSelector((store)=> store.field);
    const dispatch = useDispatch();

    const [fieldCode, setFieldCode] = useState("");
    const [fieldName, setFieldName] = useState("");
    const [fieldLocation, setFieldLocation] = useState("");
    const [fieldExtentSize, setFieldExtentSize] = useState<number | "">("");
    const [fieldImage1, setFieldImage1] = useState<File | null>(null);
    const [fieldImage2, setFieldImage2] = useState<File | null>(null);
    const [previewImage1, setPreviewImage1] = useState<string | null>(null);
    const [previewImage2, setPreviewImage2] = useState<string | null>(null);

    const handleFieldOperation = (type: string) => {
        if (!fieldCode || !fieldName || !fieldLocation || !fieldExtentSize) {
            alert("Please fill out all required fields.");
            return;
        }

        const newField: Field = {
            field_code: fieldCode,
            field_name: fieldName,
            field_location: fieldLocation,
            field_extent_size: Number(fieldExtentSize),
            field_image1: previewImage1 || "",
            field_image2: previewImage2 || "",
        };

        switch (type) {
            case "ADD_FIELD":
                dispatch(addField(newField));
                clearForm();
                break;
            case "UPDATE_FIELD":
                dispatch(updateField(newField));
                clearForm();
                break;
            case "DELETE_FIELD":
                dispatch(deleteField(fieldCode));
                clearForm();
                break;
            default:
                break;
        }
    };


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, setImage: React.Dispatch<React.SetStateAction<File | null>>, setPreview: React.Dispatch<React.SetStateAction<string | null>>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const clearForm = () => {
        setFieldCode("");
        setFieldName("");
        setFieldLocation("");
        setFieldExtentSize("");
        setFieldImage1(null);
        setFieldImage2(null);
        setPreviewImage1(null);
        setPreviewImage2(null);
    };

    const handleFieldCodeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const field = fields.find((f: Field) => f.field_code === fieldCode);
            if (field) {
                setFieldName(field.field_name);
                setFieldLocation(field.field_location);
                setFieldExtentSize(field.field_extent_size);
                setPreviewImage1(field.field_image1 || null);
                setPreviewImage2(field.field_image2 || null);
            } else {
                alert("Field not found.");
            }
        }
    };


    return (
        <>
            <form className="mx-1 mt-0 p-3 rounded-lg border-3 border-green-800">
                <div className="grid gap-6 mb-6 md:grid-cols-3">
                    <div>
                        <label htmlFor="field_code" className="block mb-2 text-sm font-medium text-gray-900">
                            Field Code
                        </label>
                        <input
                            type="text"
                            id="field_code"
                            value={fieldCode}
                            onChange={(e) => setFieldCode(e.target.value)}
                            onKeyDown={handleFieldCodeEnter}
                            className="w-full p-1 border rounded bg-[#5ea080] focus:outline-none focus:border-none"
                            placeholder="F123"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="field_name" className="block mb-2 text-sm font-medium text-gray-900">
                            Field Name
                        </label>
                        <input
                            type="text"
                            id="field_name"
                            value={fieldName}
                            onChange={(e) => setFieldName(e.target.value)}
                            className="w-full p-1 border rounded bg-[#5ea080] focus:outline-none focus:border-none"
                            placeholder="Main Field"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900">
                            Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            value={fieldLocation}
                            onChange={(e) => setFieldLocation(e.target.value)}
                            className="w-full p-1 border rounded bg-[#5ea080] focus:outline-none focus:border-none"
                            placeholder="City"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="field_size" className="block mb-2 text-sm font-medium text-gray-900">
                            Field Size
                        </label>
                        <input
                            type="number"
                            id="field_size"
                            value={fieldExtentSize}
                            onChange={(e) => setFieldExtentSize(Number(e.target.value))}
                            className="w-full p-1 border rounded bg-[#5ea080] focus:outline-none focus:border-none"
                            placeholder="100"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="field_image1" className="block mb-2 text-sm font-medium text-gray-900">
                            Field Image 1
                        </label>
                        <input
                            type="file"
                            id="field_image1"
                            onChange={(e) => handleImageChange(e, setFieldImage1, setPreviewImage1)}
                            className="w-full p-1.5 text-xs border rounded border-green-400"
                            accept="image/*"
                        />
                        {previewImage1 && <img src={previewImage1} alt="Preview 1" className="mt-2 h-20"/>}
                    </div>
                    <div>
                        <label htmlFor="field_image2" className="block mb-2 text-sm font-medium text-gray-900">
                            Field Image 2
                        </label>
                        <input
                            type="file"
                            id="field_image2"
                            onChange={(e) => handleImageChange(e, setFieldImage2, setPreviewImage2)}
                            className="w-full p-1.5 text-xs border rounded border-green-400"
                            accept="image/*"
                        />
                        {previewImage2 && <img src={previewImage2} alt="Preview 2" className="mt-2 h-20"/>}
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 mx-20 mt-4">
                    <button
                        type="button"
                        onClick={() => handleFieldOperation("ADD_FIELD")}
                        className="w-full text-white bg-green-800 hover:bg-transparent border-2 border-green-800 font-bold rounded-lg text-sm px-5 py-2 text-center"
                    >
                        Add Field
                    </button>
                    <button
                        type="button"
                        onClick={() => handleFieldOperation("UPDATE_FIELD")}
                        className="w-full text-white bg-green-800 hover:bg-transparent border-2 border-green-800 font-bold rounded-lg text-sm px-5 py-2 text-center"
                    >
                        Clear
                    </button>
                </div>


            </form>

            <FieldTableComponent fields={fields}/>
        </>
    );

};

export default FieldFormComponent;