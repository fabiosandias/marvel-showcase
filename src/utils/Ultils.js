import { useSnackbar } from 'notistack';

const Utils = () => {
    const { enqueueSnackbar } = useSnackbar();

    const formatMoney = value => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    const sumValuesCart = comics => {
        let total = 0;
        comics.forEach(comic => total += comic.quantity * comic.prices[0].price);
        return total
    }

    const toast = config => {
        enqueueSnackbar(config.MESSAGE,  {
            variant: config.TYPE,
            preventDuplicate: false,
            persist: false,
        });
    }

    return  {formatMoney, sumValuesCart, toast}
}

export default Utils;