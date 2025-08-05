import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(3, "O nome completo é obrigatório"),
    email: z.email("Por favor, insira um e-mail válido"),
    password: z
        .string()
        .min(8, "A senha deve ter no mínimo 8 caracteres")
        .regex(/[A-Z]/, "A senha deve conter ao menos uma letra maiúscula")
        .regex(/[0-9]/, "A senha deve conter ao menos um número"),
    cpf: z
        .string()
        .length(11, "O CPF deve conter exatamente 11 dígitos")
        .regex(/^\d+$/, "O CPF deve conter apenas números"),
    phone: z
        .string()
        .min(10, "O telefone deve ter no mínimo 10 dígitos (com DDD)")
        .regex(/^\d+$/, "O telefone deve conter apenas números")
});

// Exporta o tipo inferido do schema para usar no nosso formulário
export type RegisterFormData = z.infer<typeof registerSchema>;
