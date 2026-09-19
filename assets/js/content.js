const publications = [
  {
    title: "TTS-Guard: Black-Box Ownership Verification of Text-to-Speech Models via Adaptive Adversarial Speaker-Pair Fingerprints",
    authors: "Yue X., Xu Z., Wang Z., Li M., Zhou Z., Xing W., Kong D.*, Han M.*",
    venue: "Findings of the Association for Computational Linguistics: EMNLP",
    year: "2026",
    level: "CCF B",
    status: {
      en: "Accepted",
      zh: "已录用"
    },
    intro: {
      problem: {
        en: "When text-to-speech models are exposed only through black-box services, model owners need reliable evidence of ownership despite changes in speakers and generated audio.",
        zh: "当文本语音生成模型仅以黑盒服务形式开放时，面对不同说话人和生成语音的变化，模型提供方仍需要获得可靠的所有权证据。"
      },
      solution: {
        en: "This paper proposes TTS-Guard, using adaptive adversarial speaker-pair fingerprints to verify the ownership of black-box text-to-speech models.",
        zh: "本文提出 TTS-Guard，利用自适应对抗说话人对指纹，实现对黑盒文本语音生成模型的所有权验证。"
      }
    }
  },
  {
    title: "Policy of Thoughts: Scaling LLM Reasoning via Test-time Policy Evolution",
    authors: "Jiao Z., Xian H., Wang Q., Ma Y., Wang Z., Kong D.*, Han M.*",
    venue: "Conference on Empirical Methods in Natural Language Processing (EMNLP)",
    year: "2026",
    level: "CCF B",
    status: {
      en: "Accepted",
      zh: "已录用"
    },
    intro: {
      problem: {
        en: "Large language models need more adaptive reasoning strategies at test time, as fixed reasoning procedures can limit their ability to handle tasks with different levels of complexity.",
        zh: "大语言模型在测试阶段需要更具适应性的推理策略，固定的推理流程难以充分应对复杂度不同的任务。"
      },
      solution: {
        en: "This paper introduces test-time policy evolution to adapt reasoning policies during inference and improve the scalability of large-model reasoning.",
        zh: "本文通过测试时策略演化，在推理过程中动态调整推理策略，提升大模型推理的可扩展性。"
      }
    }
  },
  {
    title: "TurboPlan: Taming Resource-Optimal and Timely Data Plane Offloading by Reducing Task Copies",
    authors: "Zheng L., Yu J., Zhu L., Niu J., Tian J., Kong D.*, Liu H., Zhang J., Liu X., Zhang D., Wu C., Chen X.",
    venue: "IEEE Real-Time Systems Symposium (RTSS)",
    year: "2026",
    level: "CCF A",
    status: {
      en: "Accepted",
      zh: "已录用"
    },
    intro: {
      problem: {
        en: "Data-plane offloading accelerates latency-critical tasks, but excessive task copies consume scarce switch resources and constrain the timely deployment of real-time workloads.",
        zh: "数据平面卸载能够加速时延关键任务，但过多的任务副本会消耗有限的交换设备资源，并限制实时工作负载的及时部署。"
      },
      solution: {
        en: "This paper proposes TurboPlan, combining automatic task decomposition with hardware-aware constraints to reduce inter- and intra-switch task copies while balancing resource efficiency and timeliness.",
        zh: "本文提出 TurboPlan，通过自动任务分解与面向硬件特性的约束建模，减少交换设备内部及设备之间的任务副本，兼顾资源效率与实时性。"
      }
    }
  },
  {
    title: "When Address Learning Goes Wrong: Inducing Forwarding Loops and DoS Amplification in SDN",
    authors: "Kong D., Zhang Y., Xie Z., Zheng N., Lin S., Xu Z., Li M., Wang Z., Chen X., Lin C., Zhang D., Liu X., Wu C., Han M.",
    venue: "USENIX Security",
    year: "2026",
    level: "CCF A",
    status: {
      en: "Accepted",
      zh: "已录用"
    },
    intro: {
      problem: {
        en: "In AI-oriented infrastructure networks, address-learning failures can be amplified into forwarding loops and denial-of-service effects, disrupting distributed training synchronization and destabilizing latency-sensitive model-serving traffic.",
        zh: "在承载大模型训练、推理与智能服务的基础设施网络中，地址学习异常可能被放大为转发环路和拒绝服务效应，从而干扰分布式训练同步，并影响时延敏感的模型服务流量。"
      },
      solution: {
        en: "This paper systematically uncovers this failure chain, helping operators spot and avoid hidden risks before they disrupt large AI training and serving jobs.",
        zh: "本文系统揭示这类故障链条，帮助运维人员在其干扰大规模 AI 训练与推理任务之前更早识别和规避风险。"
      }
    }
  },
  {
    title: "SketchScan: Harnessing Accurate and Low-Cost Multimodal Anomaly Detection in Blockchain Networks",
    authors: "Chen X., Li J., Zhu L., Zheng L., Dong S., Xian Y., Li X., Su J., Zhou S., Li M., Zhang J., Kong D.*, Zhang D., Wu C.*",
    venue: "ACM Multimedia (ACM MM)",
    year: "2026",
    level: "CCF A",
    status: {
      en: "Accepted",
      zh: "已录用"
    },
    intro: {
      problem: {
        en: "For intelligent blockchain monitoring, multimodal anomaly detection often faces a difficult trade-off between detection accuracy and deployment cost, making it hard to support timely risk discovery and automated security response.",
        zh: "在面向智能监测的区块链网络中，多模态异常检测往往面临检测精度与部署成本难以兼顾的问题，从而限制实时风险发现与自动化安全响应。"
      },
      solution: {
        en: "This paper proposes SketchScan to make multimodal anomaly detection more practical for intelligent monitoring by improving accuracy without high deployment cost.",
        zh: "本文提出 SketchScan，在不过多增加部署成本的前提下提升检测准确性，使多模态异常检测更适合智能监测场景。"
      }
    }
  },
  {
    title: "LTD: Low-Overhead Topology Discovery using Programmable Data Planes",
    authors: "Kong D., Li M., Lin S., Xu Z., Zhu L., Zheng L., Chen X., Lin C., Liu X., Zhang D., Wu C., Han M.",
    venue: "IEEE Conference on Computer Communications (INFOCOM)",
    year: "2026",
    level: "CCF A",
    status: {
      en: "Published",
      zh: "已发表"
    },
    intro: {
      problem: {
        en: "Large AI infrastructure needs timely topology awareness, but traditional discovery mechanisms can be too costly for continuous operation, leaving training clusters with stale topology views for scheduling, fault localization, and traffic engineering.",
        zh: "面向大规模 AI 基础设施，网络拓扑需要被持续感知，但传统拓扑发现机制往往难以兼顾实时性与开销，容易使训练集群在调度、故障定位和流量优化时依赖过时拓扑视图。"
      },
      solution: {
        en: "This paper proposes LTD to keep topology awareness fresher for AI-cluster scheduling, fault diagnosis, and traffic tuning while keeping continuous monitoring overhead low.",
        zh: "本文提出 LTD，在控制持续开销的同时，为 AI 集群的调度、故障诊断和流量调优提供更及时的拓扑感知。"
      }
    }
  },
  {
    title: "Web fraud attacks against llm-driven multi-agent systems",
    authors: "Kong D., Peng H., Zhang Y., Zhao L., Xu Z., Lin S., Lin C., Han M.",
    venue: "Findings of the Association for Computational Linguistics (ACL)",
    year: "2026",
    level: "CCF A",
    status: {
      en: "Published",
      zh: "已发表"
    },
    intro: {
      problem: {
        en: "LLM-driven multi-agent systems interacting with the web can be manipulated by fraudulent web content and deceptive online workflows, causing agents to make unsafe decisions or execute harmful online actions on behalf of users.",
        zh: "面向网页交互的 LLM 驱动多智能体系统，可能被欺诈性网页内容与在线流程诱导，从而使智能体代表用户做出不安全决策或执行有害在线操作。"
      },
      solution: {
        en: "This paper systematically characterizes and evaluates these attacks, providing a clearer basis for building safer web-facing agent systems.",
        zh: "本文系统刻画并评测这类攻击，为构建更安全的 Web 交互智能体提供更清晰的依据。"
      }
    }
  },
  {
    title: "MalURLBench: A Benchmark Evaluating Agents' Vulnerabilities When Processing Web URLs",
    authors: "Kong D., Wu Z., Liu S., Tan Z., Lu K., Li M., Liu Q., Chu S., Xu Z., Liu X., Han M.",
    venue: "Findings of the Association for Computational Linguistics (ACL)",
    year: "2026",
    level: "CCF A",
    status: {
      en: "Published",
      zh: "已发表"
    },
    intro: {
      problem: {
        en: "Agents that browse the web or call tools must process URLs, yet there is a lack of systematic benchmarks for URL-induced security risks, making it difficult to understand when agents may be redirected to malicious destinations or unsafe workflows.",
        zh: "面向网页浏览与工具调用的智能体需要频繁处理 URL，但相关安全风险仍缺少系统化评测基准，这使得人们难以判断智能体何时会被引向恶意目标或不安全流程。"
      },
      solution: {
        en: "This paper introduces MalURLBench to measure URL-handling risks in agents and support safer design of web-facing agent workflows.",
        zh: "本文构建 MalURLBench，用于衡量智能体处理 URL 时的风险，并为更安全的 Web 智能体流程设计提供依据。"
      }
    }
  },
  {
    title: "DNF: Dual-Layer Nested Fingerprinting for Large Language Model Intellectual Property Protection",
    authors: "Xu Z., Zhao Y., Zhong M., Kong D.*, Lin C., Qiao T., Han M.*",
    venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
    year: "2026",
    level: "CCF B",
    status: {
      en: "Published",
      zh: "已发表"
    },
    intro: {
      problem: {
        en: "As large models are deployed more widely in intelligent systems, protecting model intellectual property remains difficult under practical usage conditions, threatening trustworthy model delivery and commercialization.",
        zh: "随着大模型在智能系统中的部署增多，模型知识产权保护在实际使用场景下仍面临鲁棒性与可用性兼顾的难题，这会影响模型交付、授权使用与商业化落地。"
      },
      solution: {
        en: "This paper proposes DNF to make large-model ownership tracing more robust under practical deployment and service use.",
        zh: "本文提出双层嵌套指纹方案 DNF，使大模型在实际部署和服务使用中的归属追踪更加稳健。"
      }
    }
  },
  {
    title: "ICPO: Illocution-Calibrated Policy Optimization for Multi-Turn Conversation",
    authors: "Wang Z., Mu X., Zhou Z., Li M., Xing W., Kong D.*, Han M.*",
    venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
    year: "2026",
    level: "CCF B",
    status: {
      en: "Published",
      zh: "已发表"
    },
    intro: {
      problem: {
        en: "In multi-turn conversational agents, policy optimization can become unstable when dialogue intent and illocution are not well aligned, reducing the reliability of assistant responses and long-horizon interaction quality.",
        zh: "在多轮对话智能体中，若言语行为与对话意图缺乏良好对齐，策略优化过程容易出现决策不稳，从而降低助手回复的可靠性和长程交互质量。"
      },
      solution: {
        en: "This paper proposes ICPO to make multi-turn agents respond more steadily and stay better aligned over longer interactions.",
        zh: "本文提出 ICPO，使多轮智能体在更长对话中保持更稳定的响应与更好的对齐。"
      }
    }
  },
  {
    title: "rDefender: A Lightweight and Robust Defense Against Flow Table Overflow Attacks in SDN",
    authors: "Kong D., Chen X., Wu C., Shen Y., Zhou Z., Cheng Q., Liu X., Yang M., Qiu Y., Zhang D., Khan M. K.",
    venue: "IEEE Transactions on Information Forensics and Security",
    year: "2024",
    level: "CCF A",
    status: {
      en: "Published",
      zh: "已发表"
    },
    intro: {
      problem: {
        en: "In AI-serving infrastructure, flow table overflow attacks can exhaust forwarding resources, delaying training data exchange and destabilizing latency-sensitive inference services.",
        zh: "在承载 AI 服务的基础设施中，流表溢出攻击会挤压关键转发资源，进而拖慢训练流量交换，并影响时延敏感的推理服务稳定性。"
      },
      solution: {
        en: "This paper proposes rDefender to detect and curb resource abuse early, helping keep training synchronization and inference traffic more stable.",
        zh: "本文提出 rDefender，尽早发现并抑制这类资源挤占，帮助训练同步和推理流量保持更稳定。"
      }
    }
  },
  {
    title: "Toward Security-Enhanced In-Band Network Telemetry in Programmable Networks",
    authors: "Kong D., Chen X., Lin H., Zhou Z., Shen Y., Liu H., Cheng Q., Liu X., Zhang D., Wu C., Khan M. K.",
    venue: "IEEE Transactions on Network and Service Management",
    year: "2024",
    level: {
      en: "CAS Q2",
      zh: "中科院二区"
    },
    status: {
      en: "Published",
      zh: "已发表"
    },
    intro: {
      problem: {
        en: "Training and inference clusters increasingly rely on network telemetry, but if telemetry itself is not well protected, later diagnosis, scheduling, and tuning can be misled.",
        zh: "训练和推理集群越来越依赖网络遥测，但如果遥测数据本身不够安全，后续的诊断、调度和调优判断就可能被误导。"
      },
      solution: {
        en: "This paper proposes SecureINT, placing Even-Mansour encryption and SipHash-based integrity checking directly on switch hardware, so AI systems can use more trustworthy telemetry for diagnosis and scheduling without giving up line-rate processing.",
        zh: "本文提出 SecureINT，把 Even-Mansour 加密和 SipHash 完整性校验直接部署到交换机硬件上，使 AI 系统在不牺牲线速度处理的前提下，也能依赖更可信的遥测做诊断和调度。"
      }
    }
  },
  {
    title: "Elastically Scaling Control Channels in Network Measurement With Escala",
    authors: "Liu H., Chen X., Huang Q., Kong D., Zhang D., Wu C., Liu X.",
    venue: "IEEE Transactions on Networking",
    year: "2024",
    level: "CCF A",
    status: {
      en: "Published",
      zh: "已发表"
    },
    intro: {
      problem: {
        en: "Large intelligent infrastructures need scalable control channels for network measurement, otherwise slow measurement feedback can delay bottleneck localization, routing adjustment, and performance tuning for large training jobs.",
        zh: "大规模智能基础设施中的网络测量需要可扩展的控制通道，否则缓慢的测量反馈会延迟瓶颈定位、路由调整以及大规模训练任务的性能调优。"
      },
      solution: {
        en: "This journal version systematizes Escala so AI infrastructure can obtain measurement feedback more promptly for diagnosis, scheduling, and performance tuning.",
        zh: "本文在期刊版本中系统化完善 Escala，使 AI 基础设施能够更及时地获得测量反馈，用于诊断、调度和性能调优。"
      }
    }
  },
  {
    title: "Combination Attacks and Defenses on SDN Topology Discovery",
    authors: "Kong D., Shen Y., Chen X., Cheng Q., Liu H., Zhang D., Liu X., Chen S., Wu C.",
    venue: "IEEE/ACM Transactions on Networking",
    year: "2023",
    level: "CCF A",
    status: {
      en: "Published",
      zh: "已发表"
    },
    intro: {
      problem: {
        en: "Topology views used by intelligent infrastructure control can be polluted by combined attacks, causing load balancing, path selection, and failure recovery for AI clusters to rely on incorrect state.",
        zh: "对智能基础设施至关重要的拓扑视图可能被组合攻击污染，导致 AI 集群中的负载均衡、路径选择和故障恢复建立在错误状态之上。"
      },
      solution: {
        en: "This paper studies defenses against these combined attacks so the state used by AI infrastructure control and scheduling remains more trustworthy.",
        zh: "本文研究针对这类组合攻击的防护思路，使 AI 基础设施控制与调度所依赖的状态信息更加可信。"
      }
    }
  },
  {
    title: "In-band Network Telemetry Manipulation Attacks and Countermeasures in Programmable Networks",
    authors: "Kong D., Zhou Z., Shen Y., Chen X., Cheng Q., Zhang D., Wu C.",
    venue: "IEEE/ACM International Symposium on Quality of Service (IWQoS)",
    year: "2023",
    level: "CCF B",
    status: {
      en: "Published",
      zh: "已发表"
    },
    intro: {
      problem: {
        en: "If in-band telemetry is tampered with, the network view used by monitoring and automation becomes unreliable, which can mislead diagnosis and tuning for AI infrastructure.",
        zh: "如果带内遥测被篡改，监测和自动化系统看到的网络状态就会失真，进而影响 AI 基础设施中的诊断和调优判断。"
      },
      solution: {
        en: "This paper analyzes these telemetry attacks and shows that Even-Mansour encryption and SipHash-based integrity checking can run directly on switch hardware at line rate, helping AI platforms base diagnosis and tuning on more trustworthy telemetry.",
        zh: "本文分析这类遥测篡改攻击，并说明 Even-Mansour 加密和 SipHash 完整性校验可以在线速度下直接运行在交换机硬件上，帮助 AI 平台基于更可信的遥测开展诊断和调优。"
      }
    }
  },
  {
    title: "TableGuard: A Novel Security Mechanism Against Flow Table Overflow Attacks in SDN",
    authors: "Kong D., Wu C., Shen Y., Chen X., Liu H., Zhang D.",
    venue: "IEEE Global Communications Conference (GLOBECOM)",
    year: "2022",
    level: "CCF C",
    status: {
      en: "Published",
      zh: "已发表"
    },
    intro: {
      problem: {
        en: "In AI-serving infrastructure networks, limited flow-table resources can be abused to harm the reliable delivery of important services, leading to packet loss or delay for training synchronization and online inference traffic.",
        zh: "在承载 AI 服务的基础设施网络中，有限的流表资源可能被恶意挤压，导致训练同步流量与在线推理流量出现丢包或时延上升。"
      },
      solution: {
        en: "This paper proposes TableGuard to protect limited forwarding resources, helping important AI training and inference flows remain more stable.",
        zh: "本文提出 TableGuard，保护有限的转发资源，帮助重要的 AI 训练与推理流量保持更稳定。"
      }
    }
  },
  {
    title: "Escala: Timely elastic scaling of control channels in network measurement",
    authors: "Liu H., Chen X., Huang Q., Kong D., Sun J., Zhang D., Zhou H., Wu C.",
    venue: "IEEE INFOCOM 2022-IEEE Conference on Computer Communications",
    year: "2022",
    level: "CCF A",
    status: {
      en: "Published",
      zh: "已发表"
    },
    intro: {
      problem: {
        en: "As measurement systems scale with modern intelligent infrastructure, control channels can become a bottleneck for timely measurement, weakening the real-time observability needed for training-cluster diagnosis and adaptive scheduling.",
        zh: "随着现代智能基础设施规模扩大，网络测量系统中的控制通道容易成为影响时效性的瓶颈，削弱训练集群诊断与自适应调度所需的实时可观测性。"
      },
      solution: {
        en: "This paper proposes Escala to scale measurement control channels in time, so AI infrastructure can receive more timely feedback for diagnosis and adaptive tuning.",
        zh: "本文提出 Escala，按需及时扩展测量控制通道，使 AI 基础设施能够获得更及时的反馈，用于诊断和自适应调优。"
      }
    }
  }
];

const openSourceProjects = [
  {
    title: "MalURLBench",
    image: {
      src: "imgs/malurlbench.png",
      alt: "MalURLBench illustration"
    },
    period: {
      en: "Benchmark & tooling",
      zh: "评测基准与工具链"
    },
    description: {
      en: "MalURLBench is an open benchmark for evaluating how web-facing agents and large models react to malicious or disguised URLs. It supports AI-oriented security testing by organizing realistic scenarios, attack cases, and evaluation workflows in a reusable form.",
      zh: "MalURLBench 是一个面向 Web 智能体和大模型系统的开源评测基准，主要用于分析它们在处理恶意或伪装 URL 时的安全性。它整理了较真实的场景、攻击样例和评测流程，便于开展与 AI 相关的安全测试和横向比较。"
    },
    link: {
      href: "https://github.com/JiangYingEr/MalURLBench"
    }
  },
  {
    title: "Web-Fraud-Attack",
    image: {
      src: "imgs/wfa.png",
      alt: "Web-Fraud-Attack illustration"
    },
    period: {
      en: "Attack evaluation framework",
      zh: "攻击评测框架"
    },
    description: {
      en: "Web-Fraud-Attack is an open framework for studying how deceptive links and online workflows can mislead LLM-driven agents. It is useful for reproducing representative attack patterns and evaluating the safety boundaries of agentic AI systems in web interaction.",
      zh: "Web-Fraud-Attack 是一个面向 LLM 智能体系统的开源攻击评测框架，主要研究伪装链接和在线流程如何误导智能体决策。它适合用于复现代表性攻击方式，并评估面向网页交互的智能体系统在安全性上的边界。"
    },
    link: {
      href: "https://github.com/JiangYingEr/Web-Fraud-Attack-in-MAS"
    }
  },
  {
    title: "LoopGen",
    image: {
      src: "imgs/loopgen.png",
      alt: "LoopGen illustration"
    },
    period: {
      en: "Vulnerability reproduction",
      zh: "漏洞复现与评估"
    },
    description: {
      en: "LoopGen is an open project for reproducing address-learning vulnerabilities and their amplification effects in programmable infrastructure networks. It can support robustness evaluation for AI-oriented infrastructure, especially when training and serving systems depend on stable cluster communication.",
      zh: "LoopGen 是一个用于复现地址学习漏洞及其放大效应的开源项目，适合用于分析这类问题对基础设施稳定性的影响。对于依赖稳定集群通信的训练和模型服务场景，它也可以作为 AI 基础设施韧性评估的实验工具。"
    },
    link: {
      href: "https://github.com/JiangYingEr/LoopGen"
    }
  },
  {
    title: "LTD",
    image: {
      src: "imgs/ltd.png",
      alt: "LTD illustration"
    },
    period: {
      en: "Topology sensing",
      zh: "拓扑感知"
    },
    description: {
      en: "LTD is an open-source implementation for low-overhead topology sensing in large-scale infrastructure networks. It is particularly relevant to AI infrastructure scenarios where fresher topology awareness can help support scheduling, diagnosis, and online operations for training and inference clusters.",
      zh: "LTD 是一个面向大规模基础设施网络的低开销拓扑感知开源实现。对于训练与推理集群这类 AI 基础设施场景，更及时的拓扑状态有助于支撑调度、诊断和在线运维相关实验。"
    },
    link: {
      href: "https://github.com/JiangYingEr/LTD"
    }
  },
  {
    title: "SecureINT",
    image: {
      src: "imgs/secureint.png",
      alt: "SecureINT illustration"
    },
    period: {
      en: "Trustworthy telemetry prototype",
      zh: "可信遥测原型"
    },
    description: {
      en: "SecureINT is a trustworthy telemetry prototype that combines lightweight cryptographic mechanisms with switch hardware. By deploying Even-Mansour encryption and SipHash-based integrity checking at line rate, it helps AI infrastructure use more trustworthy telemetry for diagnosis, scheduling, and automated operations.",
      zh: "SecureINT 是一个将轻量密码学机制与交换机硬件结合起来的可信遥测原型系统。它把 Even-Mansour 加密和基于 SipHash 的完整性校验部署到线速度处理路径上，从而为 AI 基础设施中的诊断、调度和自动化运维提供更可信的遥测数据。"
    },
    link: {
      href: "https://github.com/JiangYingEr/SecureINT"
    }
  }
];

const newsItems = [
  {
    title: {
      en: "Two papers were accepted by EMNLP 2026.",
      zh: "2篇论文被 EMNLP 2026 录用。"
    }
  },
  {
    title: {
      en: "One paper was accepted by RTSS 2026.",
      zh: "1篇论文被 RTSS 2026 录用。"
    }
  },
  {
    title: {
      en: "One paper was accepted by ACM MM 2026.",
      zh: "1篇论文被 ACM MM 2026 录用。"
    }
  },
  {
    title: {
      en: "One paper was accepted by USENIX Security 2026.",
      zh: "1篇论文被 USENIX Security 2026 接收。"
    }
  },
  {
    title: {
      en: "Two papers were accepted by ACL 2026.",
      zh: "2篇论文被 ACL 2026 接收。"
    }
  },
  {
    title: {
      en: "One paper was accepted by INFOCOM 2026.",
      zh: "1篇论文被 INFOCOM 2026 接收。"
    }
  }
];

const activityEntries = [
  {
    title: {
      en: "Reviewer",
      zh: "审稿人"
    },
    org: {
      en: "Academic Service",
      zh: "学术服务"
    },
    period: {
      en: "Recent years",
      zh: "近年来"
    },
    description: {
      en: "",
      zh: ""
    },
    bullets: [
      "IEEE Transactions on Information Forensics and Security (IEEE TIFS, CCF A)",
      "IEEE/ACM Transactions on Networking (IEEE/ACM ToN, CCF A)",
      "IEEE Transactions on Dependable and Secure Computing (IEEE TDSC, CCF A)",
      "AAAI 2026 (CCF A)",
      "ACM Multimedia 2026 (ACM MM 2026, CCF A)",
      "Computer Networks (CCF B)"
    ]
  }
];

const educationEntries = [
  {
    title: {
      en: "Postdoctoral Researcher",
      zh: "博士后研究员"
    },
    org: {
      en: "Zhejiang University",
      zh: "浙江大学"
    },
    period: {
      en: "2025 - Present",
      zh: "2025 - 至今"
    },
    logo: {
      src: "imgs/zju.png",
      alt: {
        en: "Zhejiang University logo",
        zh: "浙江大学校徽"
      }
    },
    description: {
      en: "Conducting postdoctoral research at Zhejiang University.",
      zh: "于浙江大学从事博士后研究工作。"
    },
    bullets: []
  },
  {
    title: {
      en: "Ph.D.",
      zh: "博士"
    },
    org: {
      en: "Zhejiang University, Computer Science and Technology",
      zh: "浙江大学，计算机科学与技术"
    },
    period: {
      en: "2018 - 2024",
      zh: "2018 - 2024"
    },
    logo: {
      src: "imgs/zju.png",
      alt: {
        en: "Zhejiang University logo",
        zh: "浙江大学校徽"
      }
    },
    description: {
      en: "Studied Computer Science and Technology at Zhejiang University for the Ph.D. degree.",
      zh: "于浙江大学计算机科学与技术专业攻读博士学位。"
    },
    bullets: []
  },
  {
    title: {
      en: "B.Sc.",
      zh: "学士"
    },
    org: {
      en: "Huazhong University of Science and Technology, Information Security",
      zh: "华中科技大学，信息安全"
    },
    period: {
      en: "2014 - 2018",
      zh: "2014 - 2018"
    },
    logo: {
      src: "imgs/hust.png",
      alt: {
        en: "Huazhong University of Science and Technology logo",
        zh: "华中科技大学校徽"
      }
    },
    description: {
      en: "Studied Information Security at Huazhong University of Science and Technology for the bachelor's degree.",
      zh: "于华中科技大学信息安全专业攻读学士学位。"
    },
    bullets: []
  }
];

window.profileContent = {
  defaultLanguage: "zh",
  analytics: {
    // Set this to a GA4 measurement ID such as "G-XXXXXXXXXX" to enable analytics.
    ga4MeasurementId: ""
  },
  languages: {
    en: {
      site: {
        title: "Dezhang Kong | Academic Homepage",
        description:
          "Academic homepage of Dezhang Kong, focusing on AI infrastructure security, trustworthy measurement, and resilient intelligent systems."
      },
      ui: {
        brandAriaLabel: "Back to top",
        navAriaLabel: "Primary",
        menuLabel: "Menu",
        languageToggleLabel: "中文",
        languageToggleAriaLabel: "Switch to Chinese",
        nav: {
          about: "About",
          education: "Experience",
          news: "News",
          publications: "Publications",
          projects: "Open Source",
          experience: "Activities"
        },
        sections: {
          about: {
            kicker: "",
            title: "About"
          },
          education: {
            kicker: "",
            title: "Experience"
          },
          news: {
            kicker: "",
            title: "News"
          },
          publications: {
            kicker: "",
            title: "Publications"
          },
          projects: {
            kicker: "",
            title: "Open-Source Projects"
          },
          experience: {
            kicker: "",
            title: "Activities"
          }
        }
      },
      profile: {
        name: "Dezhang Kong",
        initials: "DK",
        role: "",
        affiliation: "College of Computer Science and Technology, Zhejiang University",
        location: "",
        email: "kdz@zju.edu.cn",
        avatar: "imgs/Dezhang Kong.jpg",
        avatarAlt: "Portrait of Dezhang Kong",
        contactLine: "kdz[AT]zju.edu.cn",
        scholarLink: {
          label: "Google Scholar",
          href: "https://scholar.google.com/citations?user=DMKe8qYAAAAJ&hl=zh-TW&oi=ao"
        },
        shortBio: "",
        links: [],
        interests: [],
        facts: []
      },
      about: [
        "My research focuses on AI infrastructure security, especially highly reliable infrastructure systems that support large-scale training and inference clusters, cloud data centers, and integrated computing-network environments, together with their observability, trustworthiness, and resilience.",
        "My recent work has been published or accepted, as first or corresponding author, at venues including USENIX Security, IEEE/ACM Transactions on Networking, IEEE Transactions on Information Forensics and Security, IEEE INFOCOM, ACL, ACM MM, and ICASSP. More recently, I have become increasingly interested in security questions brought by model-serving systems and agentic services, aiming to connect classical infrastructure measurement and defense techniques with automated operations, risk assessment, and trustworthy runtime support for intelligent infrastructure."
      ],
      news: newsItems,
      publications,
      projects: openSourceProjects,
      experience: activityEntries,
      education: educationEntries
    },
    zh: {
      site: {
        title: "孔德章 | 学术主页",
        description:
          "孔德章的学术主页，研究方向聚焦 AI 基础设施安全、可信测量以及面向大模型训练与推理场景的高可靠智能基础设施。"
      },
      ui: {
        brandAriaLabel: "返回顶部",
        navAriaLabel: "主导航",
        menuLabel: "菜单",
        languageToggleLabel: "English",
        languageToggleAriaLabel: "Switch to English",
        nav: {
          about: "关于",
          education: "经历",
          news: "动态",
          publications: "论文",
          projects: "开源项目",
          experience: "学术服务"
        },
        sections: {
          about: {
            kicker: "",
            title: "关于我"
          },
          education: {
            kicker: "",
            title: "经历"
          },
          news: {
            kicker: "",
            title: "最新动态"
          },
          publications: {
            kicker: "",
            title: "论文发表"
          },
          projects: {
            kicker: "",
            title: "开源项目"
          },
          experience: {
            kicker: "",
            title: "学术服务"
          }
        }
      },
      profile: {
        name: "孔德章",
        initials: "DK",
        role: "",
        affiliation: "浙江大学计算机科学与技术学院",
        location: "",
        email: "kdz@zju.edu.cn",
        avatar: "imgs/Dezhang Kong.jpg",
        avatarAlt: "孔德章照片",
        contactLine: "kdz[AT]zju.edu.cn",
        scholarLink: {
          label: "谷歌学术",
          href: "https://scholar.google.com/citations?user=DMKe8qYAAAAJ&hl=zh-TW&oi=ao"
        },
        shortBio: "",
        links: [],
        interests: [],
        facts: []
      },
      about: [
        "我的研究关注 AI 基础设施安全，重点聚焦支撑大模型训练与推理集群、云数据中心和算网融合场景的高可靠基础设施系统，以及相关的可观测性、可信性与韧性保障问题。",
        "相关成果以第一作者或通讯作者发表于或录用于 USENIX Security、IEEE/ACM Transactions on Networking、IEEE Transactions on Information Forensics and Security、IEEE INFOCOM、ACL、ACM MM、ICASSP 等国际期刊和会议。近期我进一步关注模型服务与智能体系统带来的安全问题，希望将传统基础设施测量与防护方法，与面向智能基础设施的自动化运维、风险评估和可信运行机制结合起来。"
      ],
      news: newsItems,
      publications,
      projects: openSourceProjects,
      experience: activityEntries,
      education: educationEntries
    }
  }
};
