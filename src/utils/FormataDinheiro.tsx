
export const formataMoeda = (value: string) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(parseFloat(value));
};

export const FormataDinheiro = {
    formataMoeda
}