export interface ResponsePagination<T> {
    registros: T[];
    totalGlobal: number;
    totalfiltrado: number;
}

export interface OptionsPagination {
    orderBy?: string;
    orderDir?: 'ASC' | 'DESC' | '';
    search?: string,
    size: number,
    page: number;
    previousPage: number;
}