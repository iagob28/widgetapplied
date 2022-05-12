import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}
const mailgun = require("mailgun-js");
const mg = mailgun({
  apiKey: `${process.env.MAILGUN_API_KEY}`,
  domain: `${process.env.MAILGUN_DOMAIN_NAME}`,
});

export class SubmitFeedbackUseCase {
  constructor(private feedbacksRepository: FeedbacksRepository) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error("Type is required");
    }

    if (!comment) {
      throw new Error("Comment is required");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("invalid screenshot format");
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    const messageData = {
      from: "<iago@mailgun.com>",
      to: "iago_bortolon@hotmail.com",
      subject: "Novo feedback",
      html: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Tipo do feedback: <bold style="font-weight: 700">${type}</bold></p>`,
        `<p>Comentário: ${comment}</p>`,
        `<a href="${screenshot}" alt="Sem screenshot">`,
        `<img src="${screenshot}" style="height: auto; width: 100px"/>`,
        `</a>`,
        `</div>`,
      ].join(`\n`),
    };

    await mg.messages().send(messageData);
  }
}
