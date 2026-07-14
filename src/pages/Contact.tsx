import React from "react";
import { useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { useUiStore } from "@/store/uiStore";
import { useScrollReveal } from "@/hooks/useAnimations";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    need: "",
    budget: "",
  });
  const { showToast } = useUiStore();
  useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("提交成功，我们会尽快与您联系");
    setForm({ name: "", email: "", need: "", budget: "" });
  };

  return (
    <main className="bg-ink pt-32 md:pt-40 pb-24 md:pb-36">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div data-reveal>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Contact</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight mb-8">
              开启合作
              <br />
              对话
            </h2>
            <p className="text-ivory/70 text-lg leading-relaxed mb-12">
              无论您是希望从零开始创建品牌，还是为现有品牌注入新活力，我们都期待与您交流。填写右侧表单，我们将在 24 小时内回复。
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold mt-1" size={20} />
                <div>
                  <p className="text-ivory font-medium">工作室地址</p>
                  <p className="text-ivory/60">上海市静安区南京西路 1266 号恒隆广场 28 楼</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-gold mt-1" size={20} />
                <div>
                  <p className="text-ivory font-medium">邮箱</p>
                  <p className="text-ivory/60">contact@aurora-studio.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-gold mt-1" size={20} />
                <div>
                  <p className="text-ivory font-medium">电话</p>
                  <p className="text-ivory/60">+86 21 6288 8888</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-ivory/10 p-8 md:p-12 bg-muted/30"
            data-reveal
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              <div>
                <label className="block text-xs tracking-widest text-warm uppercase mb-3">姓名</label>
                <input
                  type="text"
                  required
                  className="underline-input"
                  placeholder="您的姓名"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest text-warm uppercase mb-3">邮箱</label>
                <input
                  type="email"
                  required
                  className="underline-input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>

            <div className="mb-10">
              <label className="block text-xs tracking-widest text-warm uppercase mb-3">项目需求</label>
              <textarea
                required
                rows={4}
                className="underline-input resize-none"
                placeholder="简要描述您的项目需求..."
                value={form.need}
                onChange={(e) => setForm({ ...form, need: e.target.value })}
              />
            </div>

            <div className="mb-12">
              <label className="block text-xs tracking-widest text-warm uppercase mb-3">预算范围</label>
              <select
                className="underline-input bg-transparent"
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
              >
                <option value="" className="bg-ink">请选择预算范围</option>
                <option value="10-30" className="bg-ink">10 - 30 万</option>
                <option value="30-80" className="bg-ink">30 - 80 万</option>
                <option value="80-150" className="bg-ink">80 - 150 万</option>
                <option value="150+" className="bg-ink">150 万以上</option>
              </select>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-ink hover:bg-ivory transition-colors duration-300 text-sm tracking-widest uppercase font-medium"
            >
              提交咨询
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
