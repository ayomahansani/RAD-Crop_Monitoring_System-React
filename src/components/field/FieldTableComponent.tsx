import {Field} from "../../models/field.ts";


const FieldTableComponent = ({ fields = [] }: { fields?: Field[] }) => {
    return (

        <table className="mt-7 min-w-full border-collapse border-2 border-green-800 bg-transparent shadow-lg sm:rounded-lg">
                <thead>
                <tr className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wider">
                    <th className="px-6 py-3 text-left font-bold">Field Code</th>
                    <th className="px-6 py-3 text-left font-bold">Field Name</th>
                    <th className="px-6 py-3 text-left font-bold">Location</th>
                    <th className="px-6 py-3 text-left font-bold">Field Size</th>
                    <th className="px-6 py-3 text-left font-bold">Field Image 1</th>
                    <th className="px-6 py-3 text-left font-bold">Field Image 2</th>
                </tr>
                </thead>
                <tbody>
                {fields.length > 0 ? (
                    fields.map((field: Field, index: number) => (
                        <tr
                            key={index}
                            className="hover:bg-[#5ea080] even:bg-transparent  text-gray-700 border-t"
                        >
                            <td className="px-6 py-4">{field.field_code}</td>
                            <td className="px-6 py-4">{field.field_name}</td>
                            <td className="px-6 py-4">{field.field_location}</td>
                            <td className="px-6 py-4">{field.field_extent_size}</td>
                            <td className="px-6 py-4">
                                {field.field_image1 ? (
                                    <img
                                        src={field.field_image1}
                                        alt="Field Image 1"
                                        className="h-14 w-14 object-cover rounded"
                                    />
                                ) : (
                                    "No Image"
                                )}
                            </td>
                            <td className="px-6 py-4">
                                {field.field_image2 ? (
                                    <img
                                        src={field.field_image2}
                                        alt="Field Image 2"
                                        className="h-14 w-14 object-cover rounded"
                                    />
                                ) : (
                                    "No Image"
                                )}
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={6} className="text-center py-4 text-gray-500">
                            No fields available.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

    );
};

export default FieldTableComponent;