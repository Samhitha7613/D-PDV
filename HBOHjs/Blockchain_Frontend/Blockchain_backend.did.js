export const idlFactory = ({ IDL }) => {
    return IDL.Service({
        'get_data': IDL.Func([], [IDL.Text], []),
        'store_data': IDL.Func([IDL.Text], [IDL.Text], []),
    });
};
export const init = ({ IDL }) => { return []; };
