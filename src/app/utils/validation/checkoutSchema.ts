import { z } from "zod";

export const checkoutSchema = z.object({
    fullName: z.string().min(3, "Nome completo é obrigatório"),
    cpf: z
        .string()
        .length(11, "O CPF deve conter exatamente 11 dígitos")
        .regex(/^\d+$/, "O CPF deve conter apenas números"),
    phone: z
        .string()
        .regex(
            /^\d{10,11}$/,
            "O telefone deve conter 10 ou 11 dígitos (com DDD)"
        ),
    postalCode: z
        .string()
        .length(8, "O CEP deve conter 8 dígitos")
        .regex(/^\d+$/, "O CEP deve conter apenas números"),
    street: z.string().min(3, "O nome da rua é obrigatório"),
    number: z.string().min(1, "O número é obrigatório"),
    complement: z.string().optional(),
    neighborhood: z.string().min(2, "O bairro é obrigatório"),
    city: z.string().min(2, "A cidade é obrigatória"),
    state: z.string().min(2, "O estado é obrigatório"),
    paymentMethod: z.enum(["CREDIT_CARD", "DEBIT_CARD", "PIX"], {
        error: "Por favor, selecione um método de pagamento."
    })
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
